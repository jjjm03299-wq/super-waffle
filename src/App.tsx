import React, { useState, useEffect } from "react";
import { api, Country, VPNStatus } from "./api";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [status, setStatus] = useState<VPNStatus>({
    connected: false,
    ip: null,
    country: null,
    connectedAt: null,
  });
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Fetch initial countries and status
  useEffect(() => {
    fetchCountries("");
    api.getStatus().then(setStatus);
  }, []);

  const fetchCountries = async (query: string) => {
    const res = await api.getCountries(query);
    if (res.status === 404) {
      setCountries([]);
      setNotFound(true);
    } else {
      setCountries(res.data);
      setNotFound(false);
      if (!selectedCountry && res.data.length > 0) {
        setSelectedCountry(res.data[0]);
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    fetchCountries(val);
  };

  const handleToggleConnect = async () => {
    if (!selectedCountry && !status.connected) return;
    setLoading(true);

    if (status.connected) {
      const newStatus = await api.disconnect();
      setStatus(newStatus);
    } else if (selectedCountry) {
      const newStatus = await api.connect(selectedCountry.code);
      setStatus(newStatus);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400 flex items-center gap-2">
          <span>🛡️</span> React Virtual VPN
        </h1>
        <div className="text-xs bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-slate-400">
          Subnet: <span className="text-emerald-400 font-mono">10.x.x.x</span>
        </div>
      </header>

      {/* Connection Panel */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span
              className={`h-3 w-3 rounded-full ${
                status.connected ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
              }`}
            />
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Status: {status.connected ? "Connected" : "Disconnected"}
            </span>
          </div>

          <p className="text-3xl font-mono font-bold text-white">
            {status.connected ? status.ip : "---.---.---.---"}
          </p>

          <p className="text-sm text-slate-400">
            {status.connected && status.country ? (
              <span>
                Location: {status.country.flag} {status.country.name}
              </span>
            ) : (
              "Select a location below to establish connection"
            )}
          </p>
        </div>

        {/* Connect / Disconnect Action */}
        <button
          onClick={handleToggleConnect}
          disabled={loading || (!selectedCountry && !status.connected)}
          className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg min-w-[200px] flex justify-center items-center gap-2 ${
            status.connected
              ? "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/30"
              : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? (
            <span className="animate-spin text-xl">🌀</span>
          ) : status.connected ? (
            "Disconnect VPN"
          ) : (
            "Connect VPN"
          )}
        </button>
      </div>

      {/* Country Selection Section */}
      <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-200">
            VPN Server Locations ({COUNTRIES_DATA.length} Available)
          </h2>
          <input
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={handleSearchChange}
            className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 w-full sm:w-64"
          />
        </div>

        {/* 404 Country Not Found State */}
        {notFound ? (
          <div className="text-center py-12 space-y-2 border border-dashed border-slate-700 rounded-xl">
            <p className="text-4xl">⚠️</p>
            <p className="text-lg font-bold text-slate-300">404 Country Not Found</p>
            <p className="text-sm text-slate-500">
              No server locations matched "{search}". Try searching for another country.
            </p>
          </div>
        ) : (
          /* Country Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
            {countries.map((c) => {
              const isSelected = selectedCountry?.code === c.code;
              const isConnectedHere = status.connected && status.country?.code === c.code;

              return (
                <button
                  key={c.code}
                  onClick={() => setSelectedCountry(c)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    isConnectedHere
                      ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                      : isSelected
                      ? "bg-slate-700/60 border-slate-500 text-white"
                      : "bg-slate-900/40 border-slate-800/80 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <p className="text-sm font-medium leading-tight">{c.name}</p>
                      <p className="text-xs text-slate-500 font-mono">{c.code}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{c.pingMs}ms</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
