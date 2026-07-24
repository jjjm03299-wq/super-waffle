export interface Country {
  code: string;
  name: string;
  flag: string;
  pingMs: number;
}

export interface VPNStatus {
  connected: boolean;
  ip: string | null;
  country: Country | null;
  connectedAt: Date | null;
}

// 100 Countries Mock Data with ISO Flags
export const COUNTRIES_DATA: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", pingMs: 18 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", pingMs: 24 },
  { code: "CA", name: "Canada", flag: "🇨🇦", pingMs: 32 },
  { code: "DE", name: "Germany", flag: "🇩🇪", pingMs: 15 },
  { code: "JP", name: "Japan", flag: "🇯🇵", pingMs: 95 },
  { code: "AU", name: "Australia", flag: "🇦🇺", pingMs: 140 },
  { code: "FR", name: "France", flag: "🇫🇷", pingMs: 20 },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", pingMs: 12 },
  { code: "SG", name: "Singapore", flag: "🇸🇬", pingMs: 88 },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", pingMs: 19 },
  { code: "SE", name: "Sweden", flag: "🇸🇪", pingMs: 25 },
  { code: "NO", name: "Norway", flag: "🇳🇴", pingMs: 28 },
  { code: "FI", name: "Finland", flag: "🇫🇮", pingMs: 30 },
  { code: "DK", name: "Denmark", flag: "🇩🇰", pingMs: 22 },
  { code: "ES", name: "Spain", flag: "🇪🇸", pingMs: 35 },
  { code: "IT", name: "Italy", flag: "🇮🇹", pingMs: 38 },
  { code: "BR", name: "Brazil", flag: "🇧🇷", pingMs: 110 },
  { code: "MX", name: "Mexico", flag: "🇲🇽", pingMs: 55 },
  { code: "IN", name: "India", flag: "🇮🇳", pingMs: 120 },
  { code: "KR", name: "South Korea", flag: "🇰🇷", pingMs: 85 },
  { code: "IE", name: "Ireland", flag: "🇮🇪", pingMs: 21 },
  { code: "BE", name: "Belgium", flag: "🇧🇪", pingMs: 17 },
  { code: "AT", name: "Austria", flag: "🇦🇹", pingMs: 23 },
  { code: "PL", name: "Poland", flag: "🇵🇱", pingMs: 31 },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", pingMs: 29 },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", pingMs: 155 },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", pingMs: 180 },
  { code: "AR", name: "Argentina", flag: "🇦🇷", pingMs: 135 },
  { code: "CL", name: "Chile", flag: "🇨🇱", pingMs: 142 },
  { code: "CO", name: "Colombia", flag: "🇨🇴", pingMs: 98 },
  { code: "PT", name: "Portugal", flag: "🇵🇹", pingMs: 40 },
  { code: "GR", name: "Greece", flag: "🇬🇷", pingMs: 48 },
  { code: "RO", name: "Romania", flag: "🇷🇴", pingMs: 36 },
  { code: "HU", name: "Hungary", flag: "🇭🇺", pingMs: 33 },
  { code: "TR", name: "Turkey", flag: "🇹🇷", pingMs: 62 },
  { code: "IL", name: "Israel", flag: "🇮🇱", pingMs: 75 },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", pingMs: 45 },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", pingMs: 115 },
  { code: "TH", name: "Thailand", flag: "🇹🇭", pingMs: 105 },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", pingMs: 92 },
  { code: "PH", name: "Philippines", flag: "🇵🇭", pingMs: 125 },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", pingMs: 118 },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", pingMs: 82 },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", pingMs: 90 },
  { code: "EG", name: "Egypt", flag: "🇪🇬", pingMs: 102 },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", pingMs: 165 },
  { code: "KE", name: "Kenya", flag: "🇰🇪", pingMs: 172 },
  { code: "MA", name: "Morocco", flag: "🇲🇦", pingMs: 58 },
  { code: "IS", name: "Iceland", flag: "🇮🇸", pingMs: 42 },
  { code: "EE", name: "Estonia", flag: "🇪🇪", pingMs: 34 },
  { code: "LV", name: "Latvia", flag: "🇱🇻", pingMs: 37 },
  { code: "LT", name: "Lithuania", flag: "🇱🇹", pingMs: 36 },
  { code: "SK", name: "Slovakia", flag: "🇸🇰", pingMs: 32 },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", pingMs: 44 },
  { code: "HR", name: "Croatia", flag: "🇭🇷", pingMs: 39 },
  { code: "SI", name: "Slovenia", flag: "🇸🇮", pingMs: 35 },
  { code: "LU", name: "Luxembourg", flag: "🇱🇺", pingMs: 16 },
  { code: "CY", name: "Cyprus", flag: "🇨🇾", pingMs: 68 },
  { code: "MT", name: "Malta", flag: "🇲🇹", pingMs: 52 },
  { code: "RS", name: "Serbia", flag: "🇷🇸", pingMs: 41 },
  { code: "MD", name: "Moldova", flag: "🇲🇩", pingMs: 46 },
  { code: "GE", name: "Georgia", flag: "🇬🇪", pingMs: 72 },
  { code: "AM", name: "Armenia", flag: "🇦🇲", pingMs: 80 },
  { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", pingMs: 84 },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", pingMs: 110 },
  { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", pingMs: 122 },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", pingMs: 130 },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", pingMs: 128 },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", pingMs: 138 },
  { code: "NP", name: "Nepal", flag: "🇳🇵", pingMs: 145 },
  { code: "TW", name: "Taiwan", flag: "🇹🇼", pingMs: 78 },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", pingMs: 82 },
  { code: "MO", name: "Macau", flag: "🇲🇴", pingMs: 84 },
  { code: "MN", name: "Mongolia", flag: "🇲🇳", pingMs: 130 },
  { code: "PE", name: "Peru", flag: "🇵🇪", pingMs: 120 },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", pingMs: 115 },
  { code: "UY", name: "Uruguay", flag: "🇺🇾", pingMs: 138 },
  { code: "PY", name: "Paraguay", flag: "🇵🇾", pingMs: 140 },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", pingMs: 92 },
  { code: "PA", name: "Panama", flag: "🇵🇦", pingMs: 88 },
  { code: "DO", name: "Dominican Republic", flag: "🇩🇴", pingMs: 78 },
  { code: "JM", name: "Jamaica", flag: "🇯🇲", pingMs: 82 },
  { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹", pingMs: 95 },
  { code: "TN", name: "Tunisia", flag: "🇹🇳", pingMs: 54 },
  { code: "DZ", name: "Algeria", flag: "🇩🇿", pingMs: 60 },
  { code: "GH", name: "Ghana", flag: "🇬🇭", pingMs: 150 },
  { code: "CI", name: "Ivory Coast", flag: "🇨🇮", pingMs: 155 },
  { code: "SN", name: "Senegal", flag: "🇸🇳", pingMs: 140 },
  { code: "UG", name: "Uganda", flag: "🇺🇬", pingMs: 175 },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿", pingMs: 180 },
  { code: "MU", name: "Mauritius", flag: "🇲🇺", pingMs: 190 },
  { code: "QA", name: "Qatar", flag: "🇶🇦", pingMs: 85 },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", pingMs: 87 },
  { code: "OM", name: "Oman", flag: "🇴🇲", pingMs: 91 },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", pingMs: 86 },
  { code: "JO", name: "Jordan", flag: "🇯🇴", pingMs: 79 },
  { code: "LB", name: "Lebanon", flag: "🇱🇧", pingMs: 76 },
  { code: "AL", name: "Albania", flag: "🇦🇱", pingMs: 49 },
  { code: "MK", name: "North Macedonia", flag: "🇲🇰", pingMs: 47 },
  { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦", pingMs: 43 }
];

let currentVPNState: VPNStatus = {
  connected: false,
  ip: null,
  country: null,
  connectedAt: null,
};

// Generates a dynamic 10.x.x.x private VPN IP address
function generateVPNIP(): string {
  const b1 = Math.floor(Math.random() * 255);
  const b2 = Math.floor(Math.random() * 255);
  const b3 = Math.floor(Math.random() * 254) + 1;
  return `10.${b1}.${b2}.${b3}`;
}

// API Handlers
export const api = {
  // GET /api/vpn/countries
  async getCountries(search: string = ""): Promise<{ data: Country[]; status: number }> {
    await new Promise((res) => setTimeout(res, 150));
    const filtered = COUNTRIES_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered.length === 0) {
      return { data: [], status: 404 };
    }
    return { data: filtered, status: 200 };
  },

  // POST /api/vpn/connect
  async connect(countryCode: string): Promise<VPNStatus> {
    await new Promise((res) => setTimeout(res, 800)); // Simulate connection latency
    const targetCountry = COUNTRIES_DATA.find((c) => c.code === countryCode) || COUNTRIES_DATA[0];

    currentVPNState = {
      connected: true,
      ip: generateVPNIP(),
      country: targetCountry,
      connectedAt: new Date(),
    };
    return currentVPNState;
  },

  // POST /api/vpn/disconnect
  async disconnect(): Promise<VPNStatus> {
    await new Promise((res) => setTimeout(res, 400));
    currentVPNState = {
      connected: false,
      ip: null,
      country: null,
      connectedAt: null,
    };
    return currentVPNState;
  },

  // GET /api/vpn/status
  async getStatus(): Promise<VPNStatus> {
    return currentVPNState;
  },
};
