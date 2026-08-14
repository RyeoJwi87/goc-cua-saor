/* ==========================================
   KHO TRUYỆN & GIAO DIỆN HOÀN CHỈNH (CÓ DARK MODE)
   ========================================== */

// 1. Kho truyện của bạn (Thêm truyện, sửa nội dung trực tiếp tại đây)
const STORIES = [
    {
        id: "truyen-1",
        title: "Tên Truyện Thứ Nhất",
        cover: "images/bia-truyen-1.jpg", 
        description: "Phần giới thiệu tóm tắt nội dung câu chuyện trong thế giới Caelunaris...",
        category: "Fantasy",
        chapters: [
            { id: "ch-1", title: "Chương 1", content: "<p>Nội dung chương 1...</p>" }
        ]
    }
];

// 2. Hàm tự động đổ danh sách truyện ra thẻ <div id="story-list"></div>
function renderStoryList() {
    const listContainer = document.getElementById('story-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = STORIES.map(story => `
        <div class="story-card">
            <img src="${story.cover}" alt="${story.title}">
            <h3><a href="story.html?id=${story.id}">${story.title}</a></h3>
            <p>${story.description}</p>
        </div>
    `).join('');
}

// 3. Kích hoạt toàn bộ tính năng khi web tải xong
window.onload = function() {
    // Hiển thị danh sách truyện
    renderStoryList();
    

// --- TÍNH NĂNG CHẾ ĐỘ TỐI (DARK MODE) ---
document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("theme-toggle"); // Đổi ID này thành id của cái nút bấm bật tối trên web bạn
    
    // Kiểm tra xem trước đó người dùng đã bật tối chưa
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            // Lưu lại trạng thái vào bộ nhớ trình duyệt
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});

/* ==========================================
   DÙNG ĐOẠN NÀY ĐỂ DEBUG TRỰC TIẾP
   ========================================== */

window.onload = function() {
    console.log("Web đã tải xong!");

    // Xử lý Dark Mode
    const btn = document.getElementById("theme-toggle");
    if (btn) {
        console.log("Đã tìm thấy nút theme-toggle!");
        
        // Khôi phục trạng thái
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }

        btn.addEventListener("click", function() {
            console.log("Nút đã được bấm!");
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    } else {
        console.error("KHÔNG TÌM THẤY nút theme-toggle trong HTML!");
    }
};
