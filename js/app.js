/* ==========================================
   KHO TRUYỆN CÁ NHÂN & HÀM HIỂN THỊ GIAO DIỆN
   ========================================== */

const STORIES = [
    {
        id: "truyen-1",
        title: "Tên Truyện Thứ Nhất",
        cover: "images/bia-truyen-1.jpg", 
        description: "Phần giới thiệu tóm tắt nội dung câu chuyện...",
        category: "Fantasy",
        chapters: [
            { id: "ch-1", title: "Chương 1", content: "<p>Nội dung chương 1...</p>" }
        ]
    }
];

// Hàm tự động dựng danh sách truyện ra trang chủ (nếu trang có thẻ id="story-list")
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

window.onload = function() {
    renderStoryList();
    if (document.getElementById('story-detail')) renderStoryDetail();
    if (document.getElementById('chapter-content')) renderChapterContent();
};
