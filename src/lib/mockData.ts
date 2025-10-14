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
    level: "Cơ Bản" | "Trung Cấp" | "Nâng Cao";
    mode: "Online" | "Offline" | "Both";
  }>;
  wantSkills: string[];
  availability: string;
  joinedDate: string;
}

export const mockUsers: UserProfile[] = [
  {
    id: "u1",
    name: "Nguyễn Hương Giang",
    avatar: "👩‍💻",
    location: "Hà Nội",
    rating: 4.9,
    totalSessions: 47,
    bio: "Lập trình viên full-stack đam mê giảng dạy công nghệ web. Yêu thích học ngoại ngữ!",
    offerSkills: [
      { skill: "JavaScript", level: "Nâng Cao", mode: "Both" },
      { skill: "React", level: "Nâng Cao", mode: "Online" },
      { skill: "Python", level: "Trung Cấp", mode: "Online" },
    ],
    wantSkills: ["Spanish", "Guitar", "Photography"],
    availability: "Tối thứ 2-6 từ 19h-21h, Thứ 7",
    joinedDate: "2024-01-15",
  },
  {
    id: "u2",
    name: "Trần Minh Quân",
    avatar: "🎸",
    location: "TP. Hồ Chí Minh",
    rating: 4.8,
    totalSessions: 62,
    bio: "Guitarist chuyên nghiệp với 15 năm kinh nghiệm. Thông thạo tiếng Tây Ban Nha và thích giúp mọi người giao tiếp tốt hơn!",
    offerSkills: [
      { skill: "Guitar", level: "Nâng Cao", mode: "Both" },
      { skill: "Spanish", level: "Nâng Cao", mode: "Online" },
      { skill: "Public Speaking", level: "Trung Cấp", mode: "Online" },
    ],
    wantSkills: ["Video Editing", "Marketing", "Web Design"],
    availability: "Linh hoạt trong tuần",
    joinedDate: "2023-11-20",
  },
  {
    id: "u3",
    name: "Lê Thảo Vy",
    avatar: "🧘‍♀️",
    location: "Đà Nẵng",
    rating: 5.0,
    totalSessions: 38,
    bio: "Huấn luyện viên yoga được chứng nhận và chuyên gia sức khỏe. Cũng đam mê phân tích dữ liệu và Excel!",
    offerSkills: [
      { skill: "Yoga", level: "Nâng Cao", mode: "Both" },
      { skill: "Excel", level: "Nâng Cao", mode: "Online" },
      { skill: "Data Analysis", level: "Trung Cấp", mode: "Online" },
    ],
    wantSkills: ["Photography", "UI Design", "French"],
    availability: "Sáng sớm và cuối tuần",
    joinedDate: "2024-02-10",
  },
  {
    id: "u4",
    name: "Phạm Tuấn Anh",
    avatar: "📸",
    location: "Cần Thơ",
    rating: 4.7,
    totalSessions: 29,
    bio: "Nhiếp ảnh gia chuyên nghiệp chuyên chụp chân dung. Người bản ngữ tiếng Trung háo hức chia sẻ!",
    offerSkills: [
      { skill: "Photography", level: "Nâng Cao", mode: "Both" },
      { skill: "Chinese", level: "Nâng Cao", mode: "Online" },
      { skill: "Video Editing", level: "Trung Cấp", mode: "Online" },
    ],
    wantSkills: ["Python", "SEO", "Piano"],
    availability: "Chiều và tối",
    joinedDate: "2023-12-05",
  },
  {
    id: "u5",
    name: "Đỗ Thu Hằng",
    avatar: "🎨",
    location: "Hải Phòng",
    rating: 4.9,
    totalSessions: 54,
    bio: "Nhà thiết kế UI/UX với 8 năm kinh nghiệm. Yêu nấu ăn và chia sẻ công thức từ khắp nơi trên thế giới!",
    offerSkills: [
      { skill: "UI Design", level: "Nâng Cao", mode: "Online" },
      { skill: "Web Design", level: "Nâng Cao", mode: "Online" },
      { skill: "Cooking", level: "Trung Cấp", mode: "Offline" },
    ],
    wantSkills: ["JavaScript", "IELTS", "Personal Training"],
    availability: "Tối thứ 2-6 sau 18h",
    joinedDate: "2024-01-08",
  },
  {
    id: "u6",
    name: "Vũ Đức Long",
    avatar: "💼",
    location: "Nha Trang",
    rating: 4.6,
    totalSessions: 41,
    bio: "Chuyên gia tư vấn marketing và bậc thầy Excel. Luôn muốn mở rộng kỹ năng ngoại ngữ!",
    offerSkills: [
      { skill: "Marketing", level: "Nâng Cao", mode: "Online" },
      { skill: "Excel", level: "Nâng Cao", mode: "Online" },
      { skill: "SEO", level: "Trung Cấp", mode: "Online" },
    ],
    wantSkills: ["French", "Accounting", "Piano"],
    availability: "Cuối tuần và tối thứ 2",
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
    fromUser: "Trần Minh Quân",
    fromAvatar: "🎸",
    skill: "JavaScript",
    rating: 5,
    comment: "Chị Giang dạy cực kỳ dễ hiểu! Những khái niệm React phức tạp được chị giải thích một cách rất dễ nắm bắt. Rất đáng để học!",
    date: "2024-10-01",
  },
  {
    id: "r2",
    fromUser: "Lê Thảo Vy",
    fromAvatar: "🧘‍♀️",
    skill: "Guitar",
    rating: 5,
    comment: "Anh Quân rất kiên nhẫn và biết cách khiến việc học guitar trở nên thú vị ngay từ buổi đầu. Mong chờ những buổi học tiếp theo!",
    date: "2024-09-28",
  },
  {
    id: "r3",
    fromUser: "Phạm Tuấn Anh",
    fromAvatar: "📸",
    skill: "Excel",
    rating: 5,
    comment: "Chị Vy am hiểu Excel ở trình độ chuyên sâu. Chị dạy mình những công thức nâng cao giúp tiết kiệm được hàng giờ làm việc!",
    date: "2024-09-25",
  },
  {
    id: "r4",
    fromUser: "Đỗ Thu Hằng",
    fromAvatar: "🎨",
    skill: "Photography",
    rating: 4,
    comment: "Buổi học rất hay! Anh Tuấn Anh chia sẻ nhiều kỹ thuật chụp chân dung hữu ích. Lần sau muốn học thêm về kỹ thuật ánh sáng.",
    date: "2024-09-20",
  },
  {
    id: "r5",
    fromUser: "Vũ Đức Long",
    fromAvatar: "💼",
    skill: "UI Design",
    rating: 5,
    comment: "Quy trình thiết kế của chị Hằng rất bài bản và chuyên nghiệp. Mình học được nhiều mẹo thực tế có thể áp dụng ngay vào dự án!",
    date: "2024-09-18",
  },
];

export type SessionStatus = "ĐANG CHỜ" | "ĐÃ XÁC NHẬN" | "ĐÃ HỦY" | "ĐÃ HOÀN THÀNH" | "TRANH CHẤP";

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
    status: "ĐÃ XÁC NHẬN",
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
    status: "ĐANG CHỜ",
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
    status: "ĐÃ HOÀN THÀNH",
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
    description: "Dạy Yoga cho Nguyễn Hương Giang",
  },
  {
    id: "t2",
    date: "2024-10-09T14:00:00",
    sessionRef: "—",
    type: "PURCHASE",
    amount: 50,
    balanceAfter: 140,
    description: "Mua gói 50 Edits",
  },
  {
    id: "t3",
    date: "2024-10-08T19:30:00",
    sessionRef: "s4",
    type: "DEBIT",
    amount: -10,
    balanceAfter: 90,
    description: "Học JavaScript từ Nguyễn Hương Giang",
  },
  {
    id: "t4",
    date: "2024-10-05T16:00:00",
    sessionRef: "s5",
    type: "CREDIT",
    amount: 10,
    balanceAfter: 100,
    description: "Dạy tiếng Tây Ban Nha cho Đỗ Thu Hằng",
  },
];
