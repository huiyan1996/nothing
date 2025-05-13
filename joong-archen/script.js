document.addEventListener('DOMContentLoaded', async function() {
  // Load JSON data
  const [seriesData, songsData] = await Promise.all([
    fetch('data/series2.json').then(res => res.json()),
    fetch('data/songs2.json').then(res => res.json())
  ]);

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  // Render music section
  const musicGrid = document.querySelector('.music-grid');
  if (musicGrid) {
    musicGrid.innerHTML = Object.entries(songsData)
      .map(([id, song]) => `
        <div class="music-card">
          <div class="album-cover">
            <img src="${song.image}" alt="${song.title}">
            <div class="streaming-links">
              <a href="${song.links.youtube}" class="stream-link youtube" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="${song.links.spotify}" class="stream-link spotify" target="_blank">
                <i class="fab fa-spotify"></i>
              </a>
              ${song.links.apple ? `<a href="${song.links.apple}" class="stream-link apple" target="_blank">
                <i class="fab fa-apple"></i>
              </a>`:''}
            </div>
          </div>
          <div class="album-info">
            <h3>${song.title} ${song.englishTitle == song.title? '':`(${song.englishTitle})`}</h3>
            <p>${song.type} • ${song.year}</p>
          </div>
        </div>
      `)
      .join('');
  }

  // Render filmography section
  const filmographyGrid = document.querySelector('.filmography-grid');
  if (filmographyGrid) {
    filmographyGrid.innerHTML = Object.entries(seriesData)
      .map(([id, series]) => `
        <div class="film-card" data-series="${id}">
          <div class="film-poster">
            <img src="${series.image}" alt="${series.title}">
            <div class="film-overlay">
              <p class="film-role">Lead Role</p>
              <button class="watch-now">View Details</button>
            </div>
          </div>
          <div class="film-info">
            <h3>${series.title}</h3>
            <p class="film-year">${series.year}</p>
          </div>
        </div>
      `)
      .join('');
  }

  // Modal functionality
  const modal = document.getElementById('seriesModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSummary = document.getElementById('modalSummary');
  const modalCast = document.getElementById('modalCast');
  const closeBtn = document.querySelector('.close');

  // Open modal
  document.querySelectorAll('.film-card').forEach(card => {
    card.querySelector('.watch-now').addEventListener('click', () => {
      const seriesId = card.dataset.series;
      const series = seriesData[seriesId];
      
      modalTitle.textContent = series.title;
      modalSummary.innerHTML = `<p>${series.summary}</p>`;
      modalCast.innerHTML = `
        <h3>Cast</h3>
        <ul>
          ${series.cast.map(member => `<li>${member}</li>`).join('')}
        </ul>
      `;
      
      modal.style.display = 'block';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});