import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Send, User, Filter, X, TrendingUp, Sparkles } from "lucide-react";
import { mockUsers, skillTags, skillCategories } from "@/lib/mockData";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showInviteTooltip, setShowInviteTooltip] = useState<string | null>(null);

  // Popular skills with gradient colors
  const popularSkills = [
    { name: "React", color: "from-blue-500 to-cyan-500" },
    { name: "IELTS", color: "from-green-500 to-emerald-500" },
    { name: "Guitar", color: "from-orange-500 to-red-500" },
    { name: "Data Analysis", color: "from-purple-500 to-pink-500" },
    { name: "UI Design", color: "from-pink-500 to-rose-500" },
    { name: "Public Speaking", color: "from-indigo-500 to-purple-500" },
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Simulate search loading
  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      !searchQuery ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.offerSkills.some((s) => s.skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTags =
      selectedTags.length === 0 ||
      user.offerSkills.some((s) => selectedTags.includes(s.skill));

    const matchesLevel =
      !selectedLevel ||
      user.offerSkills.some((s) => s.level === selectedLevel);

    return matchesSearch && matchesTags && matchesLevel;
  });

  const getSkillColor = (skill: string) => {
    const popularSkill = popularSkills.find(s => s.name === skill);
    return popularSkill ? popularSkill.color : "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Optimized Container */}
      <section className="max-w-screen-2xl mx-auto px-6 py-10">
        {/* Professional Header Section */}
        <section className="py-20 text-center bg-[#FAF9FE] rounded-3xl mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5
                          bg-gradient-to-r from-indigo-600 to-purple-500 text-white
                          rounded-full text-sm font-semibold shadow-sm mx-auto mb-4">
            <Sparkles className="h-4 w-4" />
            <span>1.247 kỹ năng đang được chia sẻ</span>
          </div>

          {/* Main Title */}
     
      
           <h1 className="text-25xl font-bold leading-tight sm:text-4xl sm:leading-snug text-center">
  CHỢ KỸ NĂNG
</h1>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Khám phá cộng đồng chia sẻ kỹ năng – nơi ai cũng có thể dạy, ai cũng có thể học.
          </p>
        </section>

        {/* Optimized Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Modern Filter Sidebar */}
          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-4">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-purple-600" />
              <h2 className="font-bold text-lg">Bộ Lọc</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Search className="h-4 w-4 text-gray-500" />
                <label className="text-sm font-semibold">Tìm kiếm kỹ năng</label>
              </div>
              <div className="relative">
                <Input
                  placeholder="React, IELTS, Guitar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 border-gray-300 focus:border-purple-500 transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Level */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-gray-500" />
                <label className="text-sm font-semibold">Cấp độ</label>
              </div>
              <div className="space-y-2">
                {[
                  { value: "", label: "Tất Cả", color: "bg-gray-100 hover:bg-gray-200" },
                  { value: "Cơ Bản", label: "Cơ Bản", color: "bg-green-100 hover:bg-green-200 text-green-700" },
                  { value: "Trung Cấp", label: "Trung Cấp", color: "bg-blue-100 hover:bg-blue-200 text-blue-700" },
                  { value: "Nâng Cao", label: "Nâng Cao", color: "bg-purple-100 hover:bg-purple-200 text-purple-700" },
                ].map((level) => (
                  <button
                    key={level.value}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                      selectedLevel === level.value 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                        : level.color
                    }`}
                    onClick={() => setSelectedLevel(level.value)}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Skills */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-gray-500" />
                <label className="text-sm font-semibold">Kỹ năng nổi bật</label>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSkills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => toggleTag(skill.name)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedTags.includes(skill.name)
                        ? `bg-gradient-to-r ${skill.color} text-white shadow-md`
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0 || selectedLevel) && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-gray-600 hover:text-gray-800"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                  setSelectedLevel("");
                }}
              >
                <X className="h-4 w-4 mr-2" />
                Xóa bộ lọc
              </Button>
            )}
          </aside>

          {/* Results Grid */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Tìm thấy <span className="font-semibold text-purple-600">{filteredUsers.length}</span> kết quả
              </p>
            </div>

            {filteredUsers.length === 0 ? (
              <Card className="p-12 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
                <p className="text-gray-600 mb-6">
                  Thử mở rộng bộ lọc hoặc chọn kỹ năng khác.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTags([]);
                    setSelectedLevel("");
                  }}
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Xóa Bộ Lọc
                </Button>
              </Card>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [grid-template-columns:repeat(auto-fill,minmax(360px,1fr))]">
                {filteredUsers.map((user, index) => (
                  <div
                    key={user.id}
                    className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Header with Avatar */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {user.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{user.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                          <MapPin className="h-3 w-3" />
                          {user.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm text-gray-900">{user.rating}</span>
                          <span className="text-xs text-gray-500">
                            ({user.totalSessions} buổi)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {user.bio}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-700 mb-2">Dạy</div>
                      <div className="flex flex-wrap gap-2">
                        {user.offerSkills.slice(0, 3).map((skill, idx) => (
                          <div
                            key={idx}
                            className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSkillColor(skill.skill)} text-white shadow-sm`}
                          >
                            {skill.skill}
                          </div>
                        ))}
                        {user.offerSkills.length > 3 && (
                          <div className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            +{user.offerSkills.length - 3}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="mb-4 text-xs text-gray-500 flex items-center gap-1">
                      <span>🕒</span>
                      <span>{user.availability}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <Link to={`/profile/${user.id}`} className="flex-1 min-w-[120px]">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm font-medium"
                        >
                          <User className="h-3 w-3 mr-1" />
                          Xem Hồ Sơ
                        </Button>
                      </Link>
                      <div className="flex-1 min-w-[120px] relative">
                        <Link to="/messages">
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-[#E54BFF] to-[#9B5CFF] hover:from-[#D43CEF] hover:to-[#8A4CE6] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                            onMouseEnter={() => setShowInviteTooltip(user.id)}
                            onMouseLeave={() => setShowInviteTooltip(null)}
                          >
                            <Send className="h-3 w-3 mr-1" />
                            Gửi Lời Mời
                          </Button>
                        </Link>
                        
                        {/* Tooltip */}
                        {showInviteTooltip === user.id && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-10 whitespace-nowrap">
                            Sẽ trừ 10 Edits để gửi lời mời học 1–1
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Section */}
            <Card className="mt-8 p-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-3">
                  🌟 Không tìm thấy kỹ năng bạn muốn học?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Hãy đăng kỹ năng của bạn để bắt đầu chia sẻ và kiếm Edits!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Đăng Kỹ Năng Ngay
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
