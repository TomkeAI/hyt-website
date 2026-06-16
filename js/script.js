// ==================== 导航栏滚动效果 ====================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==================== 移动端菜单 ====================
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // 点击导航链接关闭菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
}

// ==================== 导航链接高亮 ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==================== 粒子背景 ====================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

createParticles();

// ==================== 数字递增动画 ====================
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // easeOutExpo
                    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const current = Math.floor(eased * target);
                    el.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
}

animateNumbers();

// ==================== 滚动渐显动画 ====================
function revealOnScroll() {
    const revealElements = document.querySelectorAll(
        '.service-card, .team-card, .case-card, .about-content, .industry-item'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

revealOnScroll();

// ==================== 表单提交 ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showToast('请填写所有必填字段', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('请输入有效的邮箱地址', 'error');
            return;
        }

        // 模拟提交
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showToast('消息发送成功！我们会尽快与您联系。', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ==================== Toast消息 ====================
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        toast.style.transition = '0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== 平滑滚动（针对不支持 smooth 的浏览器） ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const position = target.offsetTop - offset;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 交互式流程图 ====================
function initFlowcharts() {
    initFlow1();
    initFlow2();
    initFlow3();
}

// Flow1: 灰圆+蓝箭头+绿箭头+详情白框
function initFlow1() {
    const row = document.querySelector('.flow1-row');
    if (!row) return;
    const stages = row.querySelectorAll('.flow1-stage');
    stages.forEach(stage => {
        stage.addEventListener('click', () => {
            if (stage.classList.contains('dragging')) return;
            const wasActive = stage.classList.contains('active');
            stages.forEach(s => s.classList.remove('active'));
            if (!wasActive) stage.classList.add('active');
        });
    });
    setupDragSort(row, '.flow1-stage', '.flow1-barrow');
}

// Flow2: 彩色箭头块
function initFlow2() {
    const row = document.querySelector('.flow2-row');
    if (!row) return;
    const steps = row.querySelectorAll('.flow2-step');
    steps.forEach(step => {
        step.addEventListener('click', () => {
            if (step.classList.contains('dragging')) return;
            const wasActive = step.classList.contains('active');
            steps.forEach(s => s.classList.remove('active'));
            if (!wasActive) step.classList.add('active');
        });
    });
    setupDragSort(row, '.flow2-step', null);
}

// Flow3: 工艺流程（上下排 + 中间栏）
function initFlow3() {
    document.querySelectorAll('.flow3-line').forEach(line => {
        const nodes = line.querySelectorAll('.flow3-node');
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('dragging')) return;
                const wasActive = node.classList.contains('active');
                nodes.forEach(n => n.classList.remove('active'));
                if (!wasActive) node.classList.add('active');
            });
        });
        setupDragSort(line, '.flow3-node', '.flow3-darrow');
    });
}

// 通用拖拽排序
function setupDragSort(container, stepSel, arrowSel) {
    let dragEl = null;

    container.addEventListener('dragstart', (e) => {
        const step = e.target.closest(stepSel);
        if (!step) return;
        dragEl = step;
        step.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
    });

    container.addEventListener('dragend', (e) => {
        const step = e.target.closest(stepSel);
        if (!step) return;
        step.classList.remove('dragging');
        container.querySelectorAll(stepSel).forEach(s => s.classList.remove('drag-over'));
        dragEl = null;
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const step = e.target.closest(stepSel);
        if (!step || step === dragEl) return;
        container.querySelectorAll(stepSel).forEach(s => s.classList.remove('drag-over'));
        step.classList.add('drag-over');
    });

    container.addEventListener('dragleave', (e) => {
        const step = e.target.closest(stepSel);
        if (step) step.classList.remove('drag-over');
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const step = e.target.closest(stepSel);
        if (!step || step === dragEl || !dragEl) return;
        step.classList.remove('drag-over');

        const allSteps = Array.from(container.querySelectorAll(stepSel));
        const dragIdx = allSteps.indexOf(dragEl);
        const dropIdx = allSteps.indexOf(step);

        if (dragIdx < dropIdx) {
            const nextSib = step.nextElementSibling;
            if (nextSib && arrowSel && nextSib.matches(arrowSel)) {
                container.insertBefore(dragEl, nextSib.nextElementSibling);
                // 移动箭头
                const dragArrow = dragEl.previousElementSibling;
                if (dragArrow && arrowSel && dragArrow.matches(arrowSel)) {
                    container.insertBefore(dragArrow, dragEl);
                }
            } else {
                container.insertBefore(dragEl, nextSib || null);
                if (arrowSel) {
                    const prevArrow = dragEl.previousElementSibling;
                    if (prevArrow && prevArrow.matches(arrowSel)) {
                        // 箭头已在正确位置
                    }
                }
            }
        } else {
            container.insertBefore(dragEl, step);
            if (arrowSel) {
                const prevArrow = dragEl.previousElementSibling;
                if (prevArrow && prevArrow.matches(arrowSel)) {
                    container.insertBefore(prevArrow, dragEl);
                }
            }
        }
    });
}

initFlowcharts();
