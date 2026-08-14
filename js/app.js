/* ==========================================
   KHO TRUYỆN CÁ NHÂN (LƯU TRỰC TIẾP TRONG CODE)
   ========================================== */

// Danh sách các truyện của bạn (Thêm truyện mới hay sửa nội dung cứ gõ thẳng vào đây)
const STORIES = [
    {
        id: "truyen-1",
        title: "Tên Truyện Thứ Nhất Của Bạn",
        cover: "images/bia-truyen-1.jpg", // Đường dẫn tới ảnh bìa của bạn
        description: "Phần giới thiệu tóm tắt nội dung câu chuyện ở thế giới Caelunaris...",
        category: "Fantasy / OC",
        chapters: [
            {
                id: "ch-1",
                title: "Chương 1: Khởi đầu",
                content: "<p>Nội dung chương 1 bạn viết ở đây. Bạn có thể dùng thẻ &lt;p&gt; để xuống dòng cho đẹp.</p>"
            },
            {
                id: "ch-2",
                title: "Chương 2: Cuộc hành trình",
                content: "<p>Nội dung chương 2 nằm ở đây...</p>"
            }
        ]
    }
    // Nếu muốn thêm truyện thứ 2, bạn phẩy (,) rồi copy khối ngoặc nhọn trên dán xuống dưới này nhé
];

// Hàm tự động hiển thị dữ liệu lên giao diện web có sẵn của bạn
window.onload = function() {
    console.log("Đã tải kho truyện trực tiếp thành công:", STORIES);

    // Kích hoạt các hàm dựng sẵn trên giao diện web của bạn
    if (document.getElementById('story-list')) renderStoryList();
    if (document.getElementById('fav-list')) renderFavorites();
    if (document.getElementById('story-detail')) renderStoryDetail();
    if (document.getElementById('chapter-content')) renderChapterContent();
};
