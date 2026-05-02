export interface Constituency {
  id: string;
  name: string;
  state: string;
  type: "Lok Sabha" | "Vidhan Sabha";
  booths: number;
  electors: number;
  pinCodes: string[];
  electoralOfficer?: {
    name: string;
    phone: string;
    email?: string;
  };
}

export const constituencies: Constituency[] = [
  {
    id: "LS001",
    name: "Mumbai North",
    state: "Maharashtra",
    type: "Lok Sabha",
    booths: 1843,
    electors: 1520000,
    pinCodes: ["400001", "400002", "400003", "400004", "400005"],
    electoralOfficer: {
      name: "District Collector Office",
      phone: "+91-22-22620831",
      email: "ero.mumbainorth@eci.gov.in",
    },
  },
  {
    id: "LS002",
    name: "Mumbai South",
    state: "Maharashtra",
    type: "Lok Sabha",
    booths: 1672,
    electors: 1380000,
    pinCodes: ["400006", "400007", "400008", "400009", "400010"],
    electoralOfficer: {
      name: "District Collector Office",
      phone: "+91-22-22620832",
      email: "ero.mumbaisouth@eci.gov.in",
    },
  },
  {
    id: "LS003",
    name: "New Delhi",
    state: "Delhi",
    type: "Lok Sabha",
    booths: 2154,
    electors: 1680000,
    pinCodes: ["110001", "110002", "110003", "110004", "110005", "110006"],
    electoralOfficer: {
      name: "District Election Officer",
      phone: "+91-11-23392451",
      email: "deo.newdelhi@eci.gov.in",
    },
  },
  {
    id: "LS004",
    name: "East Delhi",
    state: "Delhi",
    type: "Lok Sabha",
    booths: 1987,
    electors: 1920000,
    pinCodes: ["110031", "110032", "110051", "110091", "110092", "110096"],
    electoralOfficer: {
      name: "District Election Officer",
      phone: "+91-11-22140013",
      email: "deo.eastdelhi@eci.gov.in",
    },
  },
  {
    id: "LS005",
    name: "Bengaluru North",
    state: "Karnataka",
    type: "Lok Sabha",
    booths: 1956,
    electors: 2310000,
    pinCodes: ["560001", "560002", "560003", "560045", "560046"],
    electoralOfficer: {
      name: "Deputy Commissioner Office",
      phone: "+91-80-22210077",
      email: "dc.bangaloreurban@eci.gov.in",
    },
  },
  {
    id: "LS006",
    name: "Bengaluru South",
    state: "Karnataka",
    type: "Lok Sabha",
    booths: 2087,
    electors: 2450000,
    pinCodes: ["560004", "560010", "560011", "560041", "560078"],
    electoralOfficer: {
      name: "Deputy Commissioner Office",
      phone: "+91-80-22210078",
    },
  },
  {
    id: "LS007",
    name: "Chennai North",
    state: "Tamil Nadu",
    type: "Lok Sabha",
    booths: 1654,
    electors: 1890000,
    pinCodes: ["600001", "600003", "600007", "600012", "600021"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-44-25364600",
      email: "collector.chennai@eci.gov.in",
    },
  },
  {
    id: "LS008",
    name: "Lucknow",
    state: "Uttar Pradesh",
    type: "Lok Sabha",
    booths: 1823,
    electors: 2100000,
    pinCodes: ["226001", "226002", "226003", "226004", "226005"],
    electoralOfficer: {
      name: "District Magistrate",
      phone: "+91-522-2616403",
      email: "dm.lucknow@eci.gov.in",
    },
  },
  {
    id: "LS009",
    name: "Kolkata North",
    state: "West Bengal",
    type: "Lok Sabha",
    booths: 1567,
    electors: 1450000,
    pinCodes: ["700001", "700002", "700003", "700004", "700005"],
    electoralOfficer: {
      name: "District Magistrate",
      phone: "+91-33-22143890",
      email: "dm.kolkata@eci.gov.in",
    },
  },
  {
    id: "LS010",
    name: "Ahmedabad East",
    state: "Gujarat",
    type: "Lok Sabha",
    booths: 1789,
    electors: 2050000,
    pinCodes: ["380001", "380002", "380003", "380004", "380005"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-79-25507373",
      email: "collector.ahmedabad@eci.gov.in",
    },
  },
  {
    id: "LS011",
    name: "Pune",
    state: "Maharashtra",
    type: "Lok Sabha",
    booths: 2012,
    electors: 2280000,
    pinCodes: ["411001", "411002", "411003", "411004", "411005"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-20-26123371",
      email: "collector.pune@eci.gov.in",
    },
  },
  {
    id: "LS012",
    name: "Hyderabad",
    state: "Telangana",
    type: "Lok Sabha",
    booths: 1934,
    electors: 2150000,
    pinCodes: ["500001", "500002", "500003", "500004", "500005"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-40-24612345",
      email: "collector.hyderabad@eci.gov.in",
    },
  },
  {
    id: "LS013",
    name: "Jaipur",
    state: "Rajasthan",
    type: "Lok Sabha",
    booths: 1756,
    electors: 1980000,
    pinCodes: ["302001", "302002", "302003", "302004", "302005"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-141-2227300",
      email: "collector.jaipur@eci.gov.in",
    },
  },
  {
    id: "LS014",
    name: "Patna Sahib",
    state: "Bihar",
    type: "Lok Sabha",
    booths: 1623,
    electors: 1870000,
    pinCodes: ["800001", "800002", "800003", "800004", "800005"],
    electoralOfficer: {
      name: "District Magistrate",
      phone: "+91-612-2217953",
      email: "dm.patna@eci.gov.in",
    },
  },
  {
    id: "LS015",
    name: "Thiruvananthapuram",
    state: "Kerala",
    type: "Lok Sabha",
    booths: 1345,
    electors: 1420000,
    pinCodes: ["695001", "695002", "695003", "695004", "695005"],
    electoralOfficer: {
      name: "District Collector",
      phone: "+91-471-2731177",
      email: "collector.tvm@eci.gov.in",
    },
  },
];
