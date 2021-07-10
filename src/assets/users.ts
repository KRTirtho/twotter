export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  isAdmin: boolean;
  twotes: { id: number; content: string }[];
}

export const users: User[] = [
  {
    id: 1,
    username: "El Martinez",
    firstName: "El",
    lastName: "Martinez",
    email: "mitchellromney@theearthissquare.com",
    isAdmin: true,
    twotes: [
      { id: 1, content: "Twotter is Amazing!" },
      { id: 2, content: "Vue is **** | BTW ****===best" },
    ],
  },
  {
    id: 2,
    username: "JColeNC",
    firstName: "J.",
    lastName: "Cole",
    email: null,
    isAdmin: false,
    twotes: [],
  },
  {
    id: 3,
    username: "kurtisconner",
    firstName: "kurtis",
    lastName: "conner",
    email: null,
    isAdmin: false,
    twotes: [],
  },
  {
    id: 4,
    username: "boburnham",
    firstName: "Bo",
    lastName: "Burnham",
    email: null,
    isAdmin: false,
    twotes: [],
  },
];
