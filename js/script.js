
document.getElementById('home').addEventListener('click', function() {
    toggleSection('home-section');
    document.getElementById('section-title').textContent = 'Ana Sayfa Düzenleme';
});

document.getElementById('departments').addEventListener('click', function() {
    toggleSection('other-sections');
    document.getElementById('section-title').textContent = 'Birimlerimiz Düzenleme';
});

document.getElementById('products').addEventListener('click', function() {
    toggleSection('products-section');
    document.getElementById('section-title').textContent = 'Ürün Düzenleme';
});

document.getElementById('announcements').addEventListener('click', function() {
    toggleSection('announcements-section');
    document.getElementById('section-title').textContent = 'Duyuru Düzenleme';
});

// Sağ paneldeki içeriklerin görünürlüğünü kontrol et
function toggleSection(sectionId) {
    // Tüm bölümleri gizle
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'none';
    document.getElementById('announcements-section').style.display = 'none';
    document.getElementById('other-sections').style.display = 'none';
    
    // Seçilen bölümü göster
    document.getElementById(sectionId).style.display = 'block';
}
