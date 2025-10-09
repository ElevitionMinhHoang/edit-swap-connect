// Mock data for Skill Swap Connect

export const skillTags = [
  "JavaScript", "Python", "Guitar", "Excel", "IELTS", "French", "Yoga",
  "Photography", "UI Design", "Public Speaking", "Spanish", "React",
  "Data Analysis", "Piano", "Chinese", "Cooking", "Video Editing",
  "Marketing", "Accounting", "Personal Training", "Web Design", "SEO"
];

export const skillCategories = [
  { name: "Technology", tags: ["JavaScript", "Python", "React", "Web Design"], icon: "💻" },
  { name: "Languages", tags: ["IELTS", "French", "Spanish", "Chinese"], icon: "🌍" },
  { name: "Design", tags: ["UI Design", "Photography", "Video Editing"], icon: "🎨" },
  { name: "Music", tags: ["Guitar", "Piano"], icon: "🎵" },
  { name: "Fitness", tags: ["Yoga", "Personal Training"], icon: "💪" },
  { name: "Business", tags: ["Excel", "Marketing", "SEO", "Accounting"], icon: "💼" },
];

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  totalSessions: number;
  bio: string;
  offerSkills: Array<{
    skill: string;
    level: "Basic" | "Intermediate" | "Advanced";
    mode: "Online" | "Offline" | "Both";
  }>;
  wantSkills: string[];
  availability: string;
  joinedDate: string;
}

export const mockUsers: UserProfile[] = [
  {
    id: "u1",
    name: "Sarah Chen",
    avatar: "👩‍💻",
    location: "San Francisco, CA",
    rating: 4.9,
    totalSessions: 47,
    bio: "Full-stack developer passionate about teaching web technologies. Love learning languages!",
    offerSkills: [
      { skill: "JavaScript", level: "Advanced", mode: "Both" },
      { skill: "React", level: "Advanced", mode: "Online" },
      { skill: "Python", level: "Intermediate", mode: "Online" },
    ],
    wantSkills: ["Spanish", "Guitar", "Photography"],
    availability: "Weeknights 7-9 PM, Saturdays",
    joinedDate: "2024-01-15",
  },
  {
    id: "u2",
    name: "Marcus Johnson",
    avatar: "🎸",
    location: "Austin, TX",
    rating: 4.8,
    totalSessions: 62,
    bio: "Professional guitarist for 15 years. Also fluent in Spanish and love helping others communicate!",
    offerSkills: [
      { skill: "Guitar", level: "Advanced", mode: "Both" },
      { skill: "Spanish", level: "Advanced", mode: "Online" },
      { skill: "Public Speaking", level: "Intermediate", mode: "Online" },
    ],
    wantSkills: ["Video Editing", "Marketing", "Web Design"],
    availability: "Flexible weekdays",
    joinedDate: "2023-11-20",
  },
  {
    id: "u3",
    name: "Amira Patel",
    avatar: "🧘‍♀️",
    location: "New York, NY",
    rating: 5.0,
    totalSessions: 38,
    bio: "Certified yoga instructor and wellness coach. Also passionate about data and Excel!",
    offerSkills: [
      { skill: "Yoga", level: "Advanced", mode: "Both" },
      { skill: "Excel", level: "Advanced", mode: "Online" },
      { skill: "Data Analysis", level: "Intermediate", mode: "Online" },
    ],
    wantSkills: ["Photography", "UI Design", "French"],
    availability: "Mornings and weekends",
    joinedDate: "2024-02-10",
  },
  {
    id: "u4",
    name: "Chen Wei",
    avatar: "📸",
    location: "Seattle, WA",
    rating: 4.7,
    totalSessions: 29,
    bio: "Professional photographer specializing in portraits. Native Chinese speaker eager to teach!",
    offerSkills: [
      { skill: "Photography", level: "Advanced", mode: "Both" },
      { skill: "Chinese", level: "Advanced", mode: "Online" },
      { skill: "Video Editing", level: "Intermediate", mode: "Online" },
    ],
    wantSkills: ["Python", "SEO", "Piano"],
    availability: "Afternoons and evenings",
    joinedDate: "2023-12-05",
  },
  {
    id: "u5",
    name: "Emma Rodriguez",
    avatar: "🎨",
    location: "Miami, FL",
    rating: 4.9,
    totalSessions: 54,
    bio: "UI/UX designer with 8 years experience. Love cooking and sharing recipes from around the world!",
    offerSkills: [
      { skill: "UI Design", level: "Advanced", mode: "Online" },
      { skill: "Web Design", level: "Advanced", mode: "Online" },
      { skill: "Cooking", level: "Intermediate", mode: "Offline" },
    ],
    wantSkills: ["JavaScript", "IELTS", "Personal Training"],
    availability: "Weeknights after 6 PM",
    joinedDate: "2024-01-08",
  },
  {
    id: "u6",
    name: "James Park",
    avatar: "💼",
    location: "Boston, MA",
    rating: 4.6,
    totalSessions: 41,
    bio: "Marketing consultant and Excel wizard. Always looking to expand my language skills!",
    offerSkills: [
      { skill: "Marketing", level: "Advanced", mode: "Online" },
      { skill: "Excel", level: "Advanced", mode: "Online" },
      { skill: "SEO", level: "Intermediate", mode: "Online" },
    ],
    wantSkills: ["French", "Accounting", "Piano"],
    availability: "Weekends and Monday evenings",
    joinedDate: "2023-10-18",
  },
];

export interface Review {
  id: string;
  fromUser: string;
  fromAvatar: string;
  skill: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockReviews: Review[] = [
  {
    id: "r1",
    fromUser: "Marcus Johnson",
    fromAvatar: "🎸",
    skill: "JavaScript",
    rating: 5,
    comment: "Sarah is an amazing teacher! She broke down complex React concepts into digestible pieces. Highly recommend!",
    date: "2024-10-01",
  },
  {
    id: "r2",
    fromUser: "Amira Patel",
    fromAvatar: "🧘‍♀️",
    skill: "Guitar",
    rating: 5,
    comment: "Marcus has incredible patience and made learning guitar fun from day one. Looking forward to more sessions!",
    date: "2024-09-28",
  },
  {
    id: "r3",
    fromUser: "Chen Wei",
    fromAvatar: "📸",
    skill: "Excel",
    rating: 5,
    comment: "Amira's expertise in Excel is top-notch. She taught me advanced formulas that saved hours of work!",
    date: "2024-09-25",
  },
  {
    id: "r4",
    fromUser: "Emma Rodriguez",
    fromAvatar: "🎨",
    skill: "Photography",
    rating: 4,
    comment: "Great session! Chen Wei shared valuable techniques for portrait photography. Would love to learn more about lighting next time.",
    date: "2024-09-20",
  },
  {
    id: "r5",
    fromUser: "James Park",
    fromAvatar: "💼",
    skill: "UI Design",
    rating: 5,
    comment: "Emma's design process is incredibly thorough. I learned practical tips I could apply to my projects immediately!",
    date: "2024-09-18",
  },
];

export type SessionStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "DONE" | "DISPUTED";

export interface Session {
  id: string;
  teacher: UserProfile;
  learner: UserProfile;
  skill: string;
  startTime: string;
  duration: number;
  mode: "Online" | "Offline";
  location: string;
  status: SessionStatus;
  editsAmount: number;
}

export const mockSessions: Session[] = [
  {
    id: "s1",
    teacher: mockUsers[0],
    learner: mockUsers[1],
    skill: "React",
    startTime: "2024-10-15T19:00:00",
    duration: 60,
    mode: "Online",
    location: "Zoom",
    status: "CONFIRMED",
    editsAmount: 10,
  },
  {
    id: "s2",
    teacher: mockUsers[1],
    learner: mockUsers[2],
    skill: "Guitar",
    startTime: "2024-10-16T18:00:00",
    duration: 90,
    mode: "Offline",
    location: "Austin Music Studio",
    status: "PENDING",
    editsAmount: 15,
  },
  {
    id: "s3",
    teacher: mockUsers[2],
    learner: mockUsers[0],
    skill: "Yoga",
    startTime: "2024-10-10T08:00:00",
    duration: 60,
    mode: "Online",
    location: "Google Meet",
    status: "DONE",
    editsAmount: 10,
  },
];

export interface Transaction {
  id: string;
  date: string;
  sessionRef: string;
  type: "CREDIT" | "DEBIT" | "PURCHASE";
  amount: number;
  balanceAfter: number;
  description: string;
}

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    date: "2024-10-10T09:00:00",
    sessionRef: "s3",
    type: "CREDIT",
    amount: 10,
    balanceAfter: 150,
    description: "Taught Yoga to Sarah Chen",
  },
  {
    id: "t2",
    date: "2024-10-09T14:00:00",
    sessionRef: "—",
    type: "PURCHASE",
    amount: 50,
    balanceAfter: 140,
    description: "Purchased 50 Edits Pack",
  },
  {
    id: "t3",
    date: "2024-10-08T19:30:00",
    sessionRef: "s4",
    type: "DEBIT",
    amount: -10,
    balanceAfter: 90,
    description: "Learned JavaScript from Sarah Chen",
  },
  {
    id: "t4",
    date: "2024-10-05T16:00:00",
    sessionRef: "s5",
    type: "CREDIT",
    amount: 10,
    balanceAfter: 100,
    description: "Taught Spanish to Emma Rodriguez",
  },
];
