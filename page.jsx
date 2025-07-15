
// File: app/page.jsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-6">
      {/* Header */}
      <header className="flex items-center gap-4 mb-6">
        <Image
          src="/stormbreakers-logo.png"
          alt="Stormbreakers Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold">AIVietnam</h1>
      </header>

      {/* Chat Interface Instructions */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">1. Bắt đầu cuộc hội thoại mới</h2>
          <p className="text-gray-300">Nhấn vào nút \"New chat\" để bắt đầu cuộc trò chuyện với AI.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Xoá các cuộc hội thoại</h2>
          <p className="text-gray-300">Nhấn vào \"Clear conversations\" để xoá toàn bộ lịch sử trò chuyện.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Chọn giao diện sáng / tối</h2>
          <p className="text-gray-300">Chuyển đổi giữa chế độ sáng và tối để phù hợp với môi trường làm việc của bạn.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Nhập yêu cầu</h2>
          <p className="text-gray-300">Nhập yêu cầu bằng tiếng Việt tự nhiên. AI sẽ phản hồi rõ ràng, ngắn gọn và dễ hiểu.</p>
        </div>
      </div>
    </main>
  );
}
