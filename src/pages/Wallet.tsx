import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet as WalletIcon, TrendingUp, TrendingDown, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockTransactions } from "@/lib/mockData";

const Wallet = () => {
  const currentBalance = 150;
  const totalEarned = 240;
  const totalSpent = 140;

  return (
    <div className="container py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Ví Của Tôi</h1>

      {/* Balance Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 shadow-elevated">
          <div className="flex items-center justify-between mb-4">
            <WalletIcon className="h-8 w-8 text-primary" />
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Mua Edits
            </Button>
          </div>
          <div className="text-3xl font-bold mb-1">{currentBalance} Edits</div>
          <p className="text-sm text-muted-foreground">Số Dư Hiện Tại</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-secondary" />
          </div>
          <div className="text-2xl font-bold mb-1 text-secondary">{totalEarned} Edits</div>
          <p className="text-sm text-muted-foreground">Tổng Kiếm Được</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="h-6 w-6 text-destructive" />
          </div>
          <div className="text-2xl font-bold mb-1 text-destructive">{totalSpent} Edits</div>
          <p className="text-sm text-muted-foreground">Tổng Đã Dùng</p>
        </Card>
      </div>

      {/* Transactions */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-semibold mb-6">Lịch Sử Giao Dịch</h2>
        <div className="space-y-4">
          {mockTransactions.map((transaction) => {
            const transactionDate = new Date(transaction.date);
            const isCredit = transaction.type === "CREDIT" || transaction.type === "PURCHASE";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-4 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isCredit ? "bg-secondary/10" : "bg-destructive/10"
                    }`}
                  >
                    {isCredit ? (
                      <ArrowUpRight className="h-5 w-5 text-secondary" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {transactionDate.toLocaleDateString("vi-VN", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                      lúc{" "}
                      {transactionDate.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                    {transaction.sessionRef !== "—" && (
                      <Badge variant="outline" className="mt-1 text-xs">
                        Buổi học: {transaction.sessionRef}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-semibold ${
                      isCredit ? "text-secondary" : "text-destructive"
                    }`}
                  >
                    {isCredit ? "+" : ""}
                    {transaction.amount} Edits
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Số dư: {transaction.balanceAfter}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Activity Chart Placeholder */}
      <Card className="p-6 mt-6 shadow-soft">
        <h2 className="text-xl font-semibold mb-4">Tổng Quan Hoạt Động</h2>
        <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
          <p className="text-muted-foreground">
            Biểu đồ: Giờ dạy và giờ học theo thời gian
          </p>
        </div>
      </Card>

      {/* Buy Edits Info */}
      <Card className="p-6 mt-6 bg-primary/5 border-primary/20">
        <h2 className="text-lg font-semibold mb-2">Cần Thêm Edits?</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Mua gói Edits để tiếp tục học không bị gián đoạn
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { amount: 20, price: "$5" },
            { amount: 50, price: "$10", popular: true },
            { amount: 100, price: "$18" },
          ].map((pack) => (
            <Card key={pack.amount} className={`p-4 text-center ${pack.popular ? "border-primary shadow-accent" : ""}`}>
              {pack.popular && (
                <Badge className="mb-2">Phổ Biến Nhất</Badge>
              )}
              <div className="text-2xl font-bold mb-1">{pack.amount} Edits</div>
              <div className="text-muted-foreground mb-3">{pack.price}</div>
              <Button size="sm" className="w-full" variant={pack.popular ? "default" : "outline"}>
                Mua Ngay
              </Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Wallet;
