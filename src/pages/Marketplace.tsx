import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Send } from "lucide-react";
import { mockUsers, skillTags } from "@/lib/mockData";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Chợ Kỹ Năng</h1>
        <p className="text-muted-foreground">Tìm người dạy hoàn hảo cho bạn</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Panel */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <h2 className="font-semibold mb-4">Bộ Lọc</h2>

            {/* Search */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Tìm Kiếm</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kỹ năng hoặc giáo viên..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Level */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Cấp Độ</label>
              <div className="space-y-2">
                {[
                  { value: "", label: "Tất Cả" },
                  { value: "Basic", label: "Cơ Bản" },
                  { value: "Intermediate", label: "Trung Cấp" },
                  { value: "Advanced", label: "Nâng Cao" }
                ].map((level) => (
                  <Button
                    key={level.value}
                    variant={selectedLevel === level.value ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel(level.value)}
                  >
                    {level.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Kỹ Năng</label>
              <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                {skillTags.slice(0, 15).map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0 || selectedLevel) && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                  setSelectedLevel("");
                }}
              >
                Xóa Tất Cả Bộ Lọc
              </Button>
            )}
          </Card>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Tìm thấy {filteredUsers.length} kết quả
            </p>
          </div>

          {filteredUsers.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                Không tìm thấy kết quả phù hợp. Thử mở rộng bộ lọc hoặc chọn kỹ năng khác.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                  setSelectedLevel("");
                }}
              >
                Xóa Bộ Lọc
              </Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="p-6 hover-lift shadow-soft">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{user.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                        <MapPin className="h-3 w-3" />
                        {user.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-semibold text-sm">{user.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({user.totalSessions} buổi)
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{user.bio}</p>

                  <div className="mb-4">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Dạy</div>
                    <div className="flex flex-wrap gap-2">
                      {user.offerSkills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="default">
                          {skill.skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 text-xs text-muted-foreground">
                    🕒 {user.availability}
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/profile/${user.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Xem Hồ Sơ
                      </Button>
                    </Link>
                    <Link to="/messages" className="flex-1">
                      <Button size="sm" className="w-full">
                        <Send className="h-4 w-4 mr-1" />
                        Gửi Lời Mời
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
