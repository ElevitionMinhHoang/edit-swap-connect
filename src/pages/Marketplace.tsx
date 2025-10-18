import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Send, User, Filter, X, TrendingUp, Sparkles, ChevronDown } from "lucide-react";
import { mockUsers, skillTags, skillCategories } from "@/lib/mockData";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showInviteTooltip, setShowInviteTooltip] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [sortBy, setSortBy] = useState<"rating" | "newest">("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [loadedProfiles, setLoadedProfiles] = useState<number>(12);

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

  // Sort and filter users
  const filteredUsers = mockUsers
    .filter((user) => {
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
    })
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating; // Descending rating
      } else {
        return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime(); // Newest first
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice(0, loadedProfiles);
  const hasMoreProfiles = loadedProfiles < filteredUsers.length;

  const loadMoreProfiles = () => {
    setLoadedProfiles(prev => Math.min(prev + itemsPerPage, filteredUsers.length));
  };

  const resetPagination = () => {
    setLoadedProfiles(itemsPerPage);
    setCurrentPage(1);
  };

  const getSkillColor = (skill: string) => {
    const popularSkill = popularSkills.find(s => s.name === skill);
    return popularSkill ? popularSkill.color : "from-gray-500 to-gray-600";
  };

  const handleApplyFilters = () => {
    setShowResults(true);
    resetPagination();
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedLevel("");
    setShowResults(false);
    resetPagination();
  };

  const handleSortChange = (value: "rating" | "newest") => {
    setSortBy(value);
    resetPagination();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Optimized Container */}
      <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Professional Header Section */}
        <section className="py-12 sm:py-16 md:py-20 text-center bg-[#FAF9FE] rounded-xl sm:rounded-2xl md:rounded-3xl mb-8 sm:mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5
                          bg-gradient-to-r from-indigo-600 to-purple-500 text-white
                          rounded-full text-xs sm:text-sm font-semibold shadow-sm mx-auto mb-3 sm:mb-4">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>1.247 kỹ năng đang được chia sẻ</span>
          </div>

          {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center mb-4">
              CHỢ KỸ NĂNG
            </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Khám phá cộng đồng chia sẻ kỹ năng – nơi ai cũng có thể dạy, ai cũng có thể học.
          </p>
        </section>

        {/* Optimized Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Modern Filter Sidebar */}
         <aside className="w-full max-w-full bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 h-fit lg:sticky lg:top-4 order-1">
           <div className="flex items-center gap-2 mb-4 sm:mb-6">
             <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
             <h2 className="font-bold text-base sm:text-lg">Bộ Lọc</h2>
           </div>

            {/* Search */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <label className="text-xs sm:text-sm font-semibold">Tìm kiếm kỹ năng</label>
              </div>
              <div className="relative w-full max-w-full">
                <Input
                  placeholder="React, IELTS, Guitar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-full h-12 pl-8 sm:pl-9 border-gray-300 focus:border-purple-500 transition-colors text-sm rounded-lg"
                />
                <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                {isLoading && (
                  <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-purple-600"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Level */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <label className="text-xs sm:text-sm font-semibold">Cấp độ</label>
              </div>
              <div className="space-y-2 w-full max-w-full">
                {[
                  { value: "", label: "Tất Cả", color: "bg-gray-100 hover:bg-gray-200" },
                  { value: "Cơ Bản", label: "Cơ Bản", color: "bg-green-100 hover:bg-green-200 text-green-700" },
                  { value: "Trung Cấp", label: "Trung Cấp", color: "bg-blue-100 hover:bg-blue-200 text-blue-700" },
                  { value: "Nâng Cao", label: "Nâng Cao", color: "bg-purple-100 hover:bg-purple-200 text-purple-700" },
                ].map((level) => (
                  <button
                    key={level.value}
                    className={`w-full max-w-full min-h-[44px] text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm ${
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
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                <label className="text-xs sm:text-sm font-semibold">Kỹ năng nổi bật</label>
              </div>
              <div className="flex flex-wrap gap-2 w-full max-w-full">
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

            {/* Apply & Clear Filters */}
            <div className="space-y-2">
              <Button
                className="w-full max-w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 text-xs sm:text-sm font-semibold"
                onClick={handleApplyFilters}
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Áp dụng bộ lọc
              </Button>
              
              {(searchQuery || selectedTags.length > 0 || selectedLevel) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full max-w-full text-gray-600 hover:text-gray-800 text-xs sm:text-sm"
                  onClick={handleClearFilters}
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Xóa bộ lọc
                </Button>
              )}
            </div>
          </aside>

          {/* Results Grid */}
          <div className="w-full max-w-full order-2">
            {!showResults ? (
              <Card className="p-4 sm:p-6 md:p-8 text-center bg-white/80 border-0 shadow-lg">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">🔍</div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Sẵn sàng khám phá</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Sử dụng bộ lọc bên trên và ấn "Áp dụng bộ lọc" để tìm kiếm kỹ năng bạn muốn học.
                </p>
              </Card>
            ) : (
              <>
                <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Tìm thấy <span className="font-semibold text-purple-600">{filteredUsers.length}</span> kết quả
                    {sortBy === "rating" && " (sắp xếp theo đánh giá ⭐)"}
                    {sortBy === "newest" && " (sắp xếp theo mới nhất)"}
                  </p>
                  
                  {/* Sorting Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as "rating" | "newest")}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="rating">Đánh giá cao nhất ⭐</option>
                      <option value="newest">Mới nhất</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {filteredUsers.length === 0 ? (
                  <Card className="p-4 sm:p-6 md:p-8 text-center bg-white/80 border-0 shadow-lg">
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">🔍</div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Không tìm thấy kết quả</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                      Thử mở rộng bộ lọc hoặc chọn kỹ năng khác.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      className="border-purple-200 text-purple-600 hover:bg-purple-50 text-xs sm:text-sm"
                    >
                      Xóa Bộ Lọc
                    </Button>
                  </Card>
                ) : (
                  <>
                    <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {displayedUsers.map((user, index) => (
                        <div
                          key={user.id}
                          className="w-full max-w-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl group animate-fade-in-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {/* Header with Avatar */}
                          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                            <div className="relative flex-shrink-0">
                              <div className="text-xl sm:text-2xl md:text-3xl">
                                {user.avatar}
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 truncate">{user.name}</h3>
                              <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                                <MapPin className="h-2 w-2 sm:h-3 sm:w-3 flex-shrink-0" />
                                <span className="truncate">{user.location}</span>
                              </div>
                              <div className="flex items-center gap-1 flex-wrap">
                                <Star className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                <span className="font-semibold text-xs sm:text-sm text-gray-900">{user.rating}</span>
                                <span className="text-xs text-gray-500">
                                  ({user.totalSessions} buổi)
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bio */}
                          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2 leading-relaxed break-words">
                            {user.bio}
                          </p>

                          {/* Skills */}
                          <div className="mb-2 sm:mb-3 md:mb-4">
                            <div className="text-xs font-semibold text-gray-700 mb-1 sm:mb-2">Dạy</div>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {user.offerSkills.slice(0, 3).map((skill, idx) => (
                                <div
                                  key={idx}
                                  className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSkillColor(skill.skill)} text-white shadow-sm truncate max-w-[70px] sm:max-w-[80px] md:max-w-none`}
                                >
                                  {skill.skill}
                                </div>
                              ))}
                              {user.offerSkills.length > 3 && (
                                <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                  +{user.offerSkills.length - 3}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Availability */}
                          <div className="mb-2 sm:mb-3 md:mb-4 text-xs text-gray-500 flex items-center gap-1">
                            <span>🕒</span>
                            <span>{user.availability}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="mt-2 sm:mt-3 md:mt-4 flex flex-col gap-2">
                            <Link to={`/profile/${user.id}`} className="w-full">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full max-w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-xs sm:text-sm font-medium h-8 sm:h-9 md:h-10"
                              >
                                <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                Xem Hồ Sơ
                              </Button>
                            </Link>
                            <div className="w-full relative">
                              <Link to="/messages" className="w-full">
                                <Button
                                  size="sm"
                                  className="w-full max-w-full bg-gradient-to-r from-[#E54BFF] to-[#9B5CFF] hover:from-[#D43CEF] hover:to-[#8A4CE6] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
                                  onMouseEnter={() => setShowInviteTooltip(user.id)}
                                  onMouseLeave={() => setShowInviteTooltip(null)}
                                >
                                  <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                  Gửi Lời Mời
                                </Button>
                              </Link>
                              
                              {/* Tooltip */}
                              {showInviteTooltip === user.id && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-10 whitespace-nowrap">
                                  Sẽ trừ 10 Edits để gửi lời mời học 1–1
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Load More Button */}
                    {hasMoreProfiles && (
                      <div className="mt-8 text-center">
                        <Button
                          onClick={loadMoreProfiles}
                          variant="outline"
                          className="border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        >
                          Xem thêm {Math.min(itemsPerPage, filteredUsers.length - loadedProfiles)} kết quả
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">
                          Đang hiển thị {displayedUsers.length} trong tổng số {filteredUsers.length} kết quả
                        </p>
                      </div>
                    )}
                  </>
                )}

              {/* CTA Section */}
              {showResults && (
                <Card className="mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 md:p-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-xl">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                      🌟 Không tìm thấy kỹ năng bạn muốn học?
                    </h3>
                    <p className="text-blue-100 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                      Hãy đăng kỹ năng của bạn để bắt đầu chia sẻ và kiếm Edits!
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                    >
                      Đăng Kỹ Năng Ngay
                    </Button>
                  </div>
                </Card>
              )}
            </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
