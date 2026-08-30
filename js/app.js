/* Main Application Logic for Saminda Sanjula Portfolio */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderSkills('all');
  renderProjects();
  renderCertifications();
  renderTimeline();
  renderPosts();
  initSkillTabs();
  initContactForm();
  initAiAssistant();
  initMobileMenu();
  initAvatarUpload();
});

/* 1. TYPEWRITER EFFECT IN HERO */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const roles = PORTFOLIO_DATA.profile.typewriterRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

/* 2. RENDER SKILLS MATRIX */
function renderSkills(filterCategory = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(skill => `
    <div class="glass-card p-6 rounded-2xl space-y-4 relative group">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <i data-lucide="${skill.icon || 'cpu'}" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="font-bold text-white text-base">${skill.name}</h4>
            <span class="text-xs text-slate-400 font-mono capitalize">${skill.category}</span>
          </div>
        </div>
        <span class="text-sm font-extrabold font-mono text-cyan-400">${skill.level}%</span>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed">${skill.description}</p>

      <!-- Progress Bar -->
      <div class="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-slate-700/50">
        <div class="bg-gradient-to-r from-cyan-500 to-purple-600 h-full rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
      </div>

      <!-- Skill Tag Pills -->
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${skill.tags.map(tag => `
          <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">${tag}</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderSkills(cat);
    });
  });
}

/* 3. RENDER PROJECTS */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(project => `
    <div class="glass-card rounded-3xl overflow-hidden border border-slate-800 space-y-6 group flex flex-col justify-between">
      <div>
        <!-- Project Banner Image -->
        <div class="relative h-56 sm:h-64 overflow-hidden border-b border-slate-800">
          <img src="${project.banner}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent"></div>
          
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md">
              ${project.subtitle}
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="p-6 space-y-4">
          <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition">${project.title}</h3>
          <p class="text-sm text-slate-300 leading-relaxed">${project.shortDesc}</p>

          <!-- Key Features Bullet List -->
          <ul class="space-y-1.5 text-xs text-slate-400 font-mono">
            ${project.features.slice(0, 3).map(f => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <!-- Tech Tag Badges -->
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${project.tags.map(t => `
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold">${t}</span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Card Action Footer -->
      <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60">
        <button onclick="openProjectModal('${project.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition flex items-center gap-1.5">
          <i data-lucide="play-circle" class="w-4 h-4"></i>
          <span>Launch Demo & Code</span>
        </button>

        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

/* 4. RENDER CERTIFICATIONS */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-mono font-bold">
            ${cert.issuedDate}
          </span>
        </div>

        <div>
          <h4 class="font-bold text-white text-base">${cert.title}</h4>
          <p class="text-xs text-cyan-400 font-mono mt-0.5">${cert.issuer} ${cert.instructor ? `• ${cert.instructor}` : ''}</p>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">${cert.description}</p>
      </div>

      <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
        ${cert.credentialId ? `
          <span class="text-slate-400">ID: <strong class="text-slate-200">${cert.credentialId}</strong></span>
        ` : '<span>Verified Credential</span>'}

        ${cert.verifiedUrl ? `
          <a href="${cert.verifiedUrl}" target="_blank" class="text-cyan-400 hover:underline flex items-center gap-1 font-bold">
            <span>Verify</span> <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        ` : `
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Verified
          </span>
        `}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

/* 5. RENDER TIMELINE */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="relative group">
      <!-- Dot -->
      <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/50">
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
      </div>

      <div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span class="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              ${item.period}
            </span>
            <h3 class="text-xl font-bold text-white mt-2">${item.role}</h3>
            <p class="text-sm font-semibold text-purple-400">${item.organization} • <span class="text-slate-400 font-normal">${item.location}</span></p>
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 self-start sm:self-auto">
            ${item.type}
          </span>
        </div>

        <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
          ${item.highlights.map(h => `
            <li class="flex items-start gap-2">
              <i data-lucide="chevron-right" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

/* 6. RENDER POSTS & ACTIVITY */
function renderPosts() {
  const container = document.getElementById('posts-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.posts.map(post => `
    <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>LinkedIn Article</span>
          <span>${post.date}</span>
        </div>

        <h4 class="font-bold text-white text-base hover:text-cyan-400 transition cursor-pointer">${post.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${post.snippet}</p>
      </div>

      <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
        ${post.tags.map(t => `
          <span class="text-[10px] font-mono text-cyan-400">${t}</span>
        `).join(' ')}
      </div>
    </div>
  `).join('');
}

/* 7. INTERACTIVE PROJECT MODAL WITH LIVE SIMULATORS */
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = project.title;

  let interactiveWidgetHTML = '';

  if (project.interactiveType === 'recommender') {
    interactiveWidgetHTML = `
      <div class="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
            <i data-lucide="sliders" class="w-4 h-4"></i> LIVE INTERACTIVE DEMO: AI Career & Tech Stack Matching
          </span>
          <span class="text-[10px] text-emerald-400 font-mono">Cosine Similarity Sandbox</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <label class="block text-slate-400 mb-1">SELECT YOUR CAREER GOAL</label>
            <select id="sim-goal" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-cyan-400">
              <option value="ai-ml">AI / Machine Learning Engineer</option>
              <option value="cv">Computer Vision Specialist</option>
              <option value="data">Data Scientist & Analyst</option>
              <option value="cyber">Cybersecurity Engineer</option>
            </select>
          </div>
          <div>
            <label class="block text-slate-400 mb-1">YOUR KEY SKILL</label>
            <input type="text" id="sim-skill" value="Python, Scikit-Learn, OpenCV" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-cyan-400" />
          </div>
        </div>

        <button onclick="runRecommenderSim()" class="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center justify-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4"></i> Calculate TF-IDF & Cosine Similarity Match
        </button>

        <div id="sim-results" class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
          <div class="text-slate-400">Click button above to simulate TF-IDF vector match output.</div>
        </div>
      </div>
    `;
  } else if (project.interactiveType === 'cv-inspector') {
    interactiveWidgetHTML = `
      <div class="p-6 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="text-xs font-mono text-purple-400 font-bold flex items-center gap-2">
            <i data-lucide="eye" class="w-4 h-4"></i> LIVE COMPUTER VISION MULTI-DETECTOR
          </span>
          <span class="text-[10px] text-cyan-400 font-mono">OCR & Bounding Box Telemetry</span>
        </div>

        <div class="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center" id="cv-frame-box">
          <img src="assets/computer_vision.jpg" class="w-full h-full object-cover opacity-80" />
          <div class="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
            <div class="flex justify-between items-start text-[10px] font-mono">
              <span class="px-2 py-1 bg-cyan-500/80 text-slate-950 font-bold rounded">FRAME DETECTED: #0482</span>
              <span class="px-2 py-1 bg-slate-950/80 text-emerald-400 border border-emerald-500/40 rounded">OCR CONFIDENCE: 98.4%</span>
            </div>
            <div class="p-3 bg-slate-950/90 border border-slate-800 rounded-xl text-xs font-mono space-y-1">
              <div class="text-cyan-300">🔍 OCR Word Text: "CRICKET PLAYER #11 ACTIVE"</div>
              <div class="text-purple-300">📦 Bounding Box: [x=320, y=140, w=110, h=240]</div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (project.interactiveType === 'medical-enhancer') {
    interactiveWidgetHTML = `
      <div class="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <span class="text-xs font-mono text-emerald-400 font-bold flex items-center gap-2">
            <i data-lucide="activity" class="w-4 h-4"></i> MEDICAL IMAGE ENHANCEMENT ANALYTICS
          </span>
          <span class="text-[10px] text-cyan-400 font-mono">MATLAB & Feature Extraction</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-xl border border-slate-800 overflow-hidden bg-slate-900 p-3 text-center space-y-2">
            <span class="text-xs font-mono text-slate-400">MRI Brain Scan Feature Map</span>
            <img src="assets/medical_imaging.jpg" class="rounded-lg w-full h-36 object-cover" />
          </div>
          <div class="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2 text-xs font-mono">
            <div class="text-slate-300 font-bold">Image Diagnostics Summary</div>
            <div class="text-slate-400">Contrast Optimization: <span class="text-emerald-400">Complete</span></div>
            <div class="text-slate-400">Feature Extraction: <span class="text-cyan-400">128 Vectors</span></div>
            <div class="text-slate-400">Tissue Classification: <span class="text-purple-400">Normal (99.1%)</span></div>
          </div>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="space-y-6">
      <div class="relative rounded-2xl overflow-hidden aspect-video border border-slate-800">
        <img src="${project.banner}" class="w-full h-full object-cover" />
      </div>

      <div class="space-y-2">
        <h4 class="text-lg font-bold text-white">Project Overview</h4>
        <p class="text-slate-300 text-sm leading-relaxed">${project.shortDesc}</p>
      </div>

      ${interactiveWidgetHTML}

      <div class="space-y-2">
        <h4 class="text-sm font-bold text-white font-mono">TECHNICAL HIGHLIGHTS</h4>
        <ul class="space-y-2 text-xs text-slate-300 font-mono">
          ${project.features.map(f => `<li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i> ${f}</li>`).join('')}
        </ul>
      </div>

      <div class="pt-4 flex items-center justify-between border-t border-slate-800">
        <a href="${project.github}" target="_blank" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2">
          <i data-lucide="github" class="w-4 h-4"></i> View Code on GitHub
        </a>
        <button onclick="closeProjectModal()" class="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs">
          Close Preview
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.getElementById('modal-close-btn')?.addEventListener('click', closeProjectModal);

/* Recommender Simulator function */
window.runRecommenderSim = function() {
  const goal = document.getElementById('sim-goal')?.value || 'ai-ml';
  const skill = document.getElementById('sim-skill')?.value || 'Python';
  const results = document.getElementById('sim-results');
  if (!results) return;

  results.innerHTML = `
    <div class="text-cyan-400 font-bold">MATCH SUCCESSFUL! (Cosine Similarity: 0.942)</div>
    <div class="text-slate-300">Recommended Path: <strong class="text-white">${goal.toUpperCase()} Senior Engineer</strong></div>
    <div class="text-emerald-400">Matched Skills: ${skill}</div>
    <div class="text-purple-400">Roadmap Phase 1: Deep Learning Foundations & Vector Database RAG Integration</div>
  `;
};

/* 8. EMAIL COPY TO CLIPBOARD */
function copyEmailToClipboard() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById('copy-toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2500);
    }
  });
}
document.getElementById('copy-email-btn')?.addEventListener('click', copyEmailToClipboard);

/* 9. CONTACT FORM SIMULATION */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const msg = document.getElementById('form-message').value;

    // Mailto fallback
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + msg)}`;
    window.open(mailtoUrl, '_blank');

    if (status) {
      status.classList.remove('hidden');
      form.reset();
      setTimeout(() => status.classList.add('hidden'), 5000);
    }
  });
}

/* 10. AI ASSISTANT CHATBOT INTEGRATION */
function initAiAssistant() {
  const toggleBtn = document.getElementById('ai-chat-toggle');
  const closeBtn = document.getElementById('ai-chat-close');
  const chatBox = document.getElementById('ai-chat-box');
  const chatForm = document.getElementById('ai-chat-form');
  const chatInput = document.getElementById('ai-chat-input');
  const chatMessages = document.getElementById('ai-chat-messages');

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
  });

  closeBtn.addEventListener('click', () => {
    chatBox.classList.add('hidden');
  });

  // Suggestion buttons
  document.querySelectorAll('.ai-suggest-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const q = e.target.textContent;
      sendChatMessage(q);
    });
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;
    sendChatMessage(query);
    chatInput.value = '';
  });

  function sendChatMessage(text) {
    // Append User Message
    appendMessage(text, 'user');

    // Generate AI Reply
    setTimeout(() => {
      const reply = getAiResponse(text);
      appendMessage(reply, 'bot');
    }, 400);
  }

  function appendMessage(text, sender) {
    const isBot = sender === 'bot';
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex items-start gap-2 ${isBot ? '' : 'flex-row-reverse'}`;

    msgDiv.innerHTML = `
      <div class="w-6 h-6 rounded-full ${isBot ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'} flex items-center justify-center shrink-0 mt-0.5">
        <i data-lucide="${isBot ? 'bot' : 'user'}" class="w-3.5 h-3.5"></i>
      </div>
      <div class="p-3 rounded-2xl ${isBot ? 'bg-slate-800/80 text-slate-200 border border-slate-700/60' : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium'} max-w-[85%]">
        ${text}
      </div>
    `;

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (window.lucide) lucide.createIcons();
  }

  function getAiResponse(query) {
    const qLower = query.toLowerCase();
    const knowledge = PORTFOLIO_DATA.aiBotKnowledge.responses;

    for (let item of knowledge) {
      if (item.keywords.some(k => qLower.includes(k))) {
        return item.answer;
      }
    }

    return PORTFOLIO_DATA.aiBotKnowledge.default;
  }
}

/* 11. MOBILE MENU TOGGLE */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

/* 12. CUSTOM AVATAR UPLOAD HANDLER */
function initAvatarUpload() {
  const fileInput = document.getElementById('avatar-file-input');
  const avatarImg = document.getElementById('profile-avatar-img');

  if (!fileInput || !avatarImg) return;

  // Restore saved photo from localStorage if present
  const savedAvatar = localStorage.getItem('saminda_custom_avatar');
  if (savedAvatar) {
    avatarImg.src = savedAvatar;
  }

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const base64Src = evt.target.result;
        avatarImg.src = base64Src;
        localStorage.setItem('saminda_custom_avatar', base64Src);
      };
      reader.readAsDataURL(file);
    }
  });
}
