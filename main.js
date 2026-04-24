// main.js — shared utility functions for CampQuest

const typeColors = {
  Sports:   { bg: '#e8f5e9', accent: '#2e7d32', dot: '#43a047' },
  Arts:     { bg: '#fce4ec', accent: '#880e4f', dot: '#e91e63' },
  Academic: { bg: '#e3f2fd', accent: '#0d47a1', dot: '#1e88e5' },
  STEM:     { bg: '#ede7f6', accent: '#4527a0', dot: '#7e57c2' },
  General:  { bg: '#fff8e1', accent: '#e65100', dot: '#ffa726' },
};

function buildCard(camp) {
  const colors = typeColors[camp.type] || typeColors['General'];
  return `
    <div class="camp-card" style="--card-bg: ${colors.bg}; --card-accent: ${colors.accent}; --card-dot: ${colors.dot};">
      <div class="card-top">
        <div class="card-type-dot"></div>
        <span class="card-type">${camp.type}</span>
        <span class="card-town">${camp.town}</span>
      </div>
      <h3 class="card-name">${camp.name}</h3>
      <p class="card-desc">${camp.description}</p>
      <div class="card-meta">
        <div class="meta-item">
          <span class="meta-label">Ages</span>
          <span class="meta-val">${camp.ageMin}–${camp.ageMax}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Dates</span>
          <span class="meta-val">${camp.dates}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Price</span>
          <span class="meta-val">${camp.price}</span>
        </div>
      </div>
      <div class="card-footer">
        <a href="mailto:${camp.contact}" class="card-btn">Contact Program</a>
        <span class="card-location">📍 ${camp.town}</span>
      </div>
    </div>
  `;
}
