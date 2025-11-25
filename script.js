// ===== Biblical References Database =====
const biblicalReferences = {
    ref1: {
        title: "أزلية الله وأبديته",
        verse: "مزامير 90: 2",
        text: "من قبل أن تولد الجبال، أو أبدأت الأرض والمسكونة، منذ الأزل إلى الأبد أنت الله",
        category: "صفات الله"
    },
    ref2: {
        title: "قدرة الله الكلية",
        verse: "أيوب 42: 2",
        text: "قد علمت أنك تستطيع كل شيء، ولا يعسر عليك أمر",
        category: "صفات الله"
    },
    ref3: {
        title: "معرفة الله الكلية",
        verse: "مزامير 139: 1-4",
        text: "يا رب، قد اختبرتني وعرفتني. أنت عرفت جلوسي وقيامي. فهمت فكري من بعيد... ليس كلمة في لساني إلا وأنت يا رب عرفتها كلها",
        category: "صفات الله"
    },
    ref4: {
        title: "حضور الله في كل مكان",
        verse: "إرميا 23: 24",
        text: "أما أملأ أنا السماوات والأرض، يقول الرب؟",
        category: "صفات الله"
    },
    ref5: {
        title: "قداسة الله",
        verse: "إشعياء 6: 3",
        text: "وهذا نادى ذاك وقال: قدوس، قدوس، قدوس رب الجنود. مجده ملء كل الأرض",
        category: "صفات الله"
    },
    ref6: {
        title: "الله محبة",
        verse: "1 يوحنا 4: 8",
        text: "الله محبة",
        category: "صفات الله"
    },
    ref7: {
        title: "عدل الله",
        verse: "تثنية 32: 4",
        text: "هو الصخر الكامل صنيعه. إن جميع سبله عدل. إله أمانة لا جور فيه. صديق وعادل هو",
        category: "صفات الله"
    },
    ref8: {
        title: "أمانة الله",
        verse: "2 تيموثاوس 2: 13",
        text: "إن كنا غير أمناء فهو يبقى أميناً، لن يقدر أن ينكر نفسه",
        category: "صفات الله"
    },
    ref9: {
        title: "الله الآب",
        verse: "متى 6: 9",
        text: "أبانا الذي في السماوات، ليتقدس اسمك",
        category: "الثالوث الأقدس"
    },
    ref10: {
        title: "الله الابن",
        verse: "يوحنا 1: 1، 14",
        text: "في البدء كان الكلمة، والكلمة كان عند الله، وكان الكلمة الله... والكلمة صار جسداً وحل بيننا",
        category: "الثالوث الأقدس"
    },
    ref11: {
        title: "الله الروح القدس",
        verse: "أعمال 5: 3-4",
        text: "يا حنانيا، لماذا ملأ الشيطان قلبك لتكذب على الروح القدس... أنت لم تكذب على الناس بل على الله",
        category: "الثالوث الأقدس"
    },
    ref12: {
        title: "معمودية المسيح - ظهور الثالوث",
        verse: "متى 3: 16-17",
        text: "فلما اعتمد يسوع صعد للوقت من الماء، وإذا السموات قد انفتحت له، فرأى روح الله نازلاً مثل حمامة وآتياً عليه، وصوت من السموات قائلاً: هذا هو ابني الحبيب الذي به سررت",
        category: "الثالوث الأقدس"
    },
    ref13: {
        title: "الإرسالية العظمى",
        verse: "متى 28: 19",
        text: "فاذهبوا وتلمذوا جميع الأمم وعمدوهم باسم الآب والابن والروح القدس",
        category: "الثالوث الأقدس"
    },
    ref14: {
        title: "بركة الثالوث",
        verse: "2 كورنثوس 13: 14",
        text: "نعمة ربنا يسوع المسيح، ومحبة الله، وشركة الروح القدس مع جميعكم. آمين",
        category: "الثالوث الأقدس"
    },
    ref15: {
        title: "أنا كائن - استخدام المسيح لاسم الله",
        verse: "يوحنا 8: 58",
        text: "قال لهم يسوع: الحق الحق أقول لكم: قبل أن يكون إبراهيم أنا كائن",
        category: "لاهوت المسيح"
    },
    ref16: {
        title: "وحدة المسيح مع الآب",
        verse: "يوحنا 10: 30",
        text: "أنا والآب واحد",
        category: "لاهوت المسيح"
    },
    ref17: {
        title: "المسيح إعلان الآب",
        verse: "يوحنا 14: 9",
        text: "قال له يسوع: أنا معكم زماناً هذه مدته ولم تعرفني يا فيلبس! الذي رآني فقد رأى الآب، فكيف تقول أنت: أرنا الآب؟",
        category: "لاهوت المسيح"
    },
    ref18: {
        title: "الكلمة كان الله",
        verse: "يوحنا 1: 1",
        text: "في البدء كان الكلمة، والكلمة كان عند الله، وكان الكلمة الله",
        category: "لاهوت المسيح"
    },
    ref19: {
        title: "المسيح في صورة الله",
        verse: "فيلبي 2: 6",
        text: "الذي إذ كان في صورة الله، لم يحسب خلسة أن يكون معادلاً لله",
        category: "لاهوت المسيح"
    },
    ref20: {
        title: "المسيح خالق الكل",
        verse: "كولوسي 1: 15-16",
        text: "الذي هو صورة الله غير المنظور، بكر كل خليقة. فإنه فيه خلق الكل: ما في السماوات وما على الأرض، ما يرى وما لا يرى",
        category: "لاهوت المسيح"
    },
    ref21: {
        title: "المسيح بهاء مجد الله",
        verse: "عبرانيين 1: 3",
        text: "الذي، وهو بهاء مجده، ورسم جوهره، وحامل كل الأشياء بكلمة قدرته، بعدما صنع بنفسه تطهيراً لخطايانا، جلس في يمين العظمة في الأعالي",
        category: "لاهوت المسيح"
    },
    ref22: {
        title: "معجزات المسيح",
        verse: "يوحنا 11: 43-44",
        text: "ولما قال هذا صرخ بصوت عظيم: لعازر، هلم خارجاً! فخرج الميت",
        category: "لاهوت المسيح"
    },
    ref23: {
        title: "المسيح يغفر الخطايا",
        verse: "مرقس 2: 5-7",
        text: "فلما رأى يسوع إيمانهم، قال للمفلوج: يا بني، مغفورة لك خطاياك. وكان قوم من الكتبة هناك جالسين يفكرون في قلوبهم: لماذا يتكلم هذا هكذا بتجاديف؟ من يقدر أن يغفر خطايا إلا الله وحده؟",
        category: "لاهوت المسيح"
    },
    ref24: {
        title: "المسيح يقبل العبادة",
        verse: "يوحنا 20: 28",
        text: "أجاب توما وقال له: ربي وإلهي!",
        category: "لاهوت المسيح"
    },
    ref25: {
        title: "ضرورة التجسد للفداء",
        verse: "عبرانيين 2: 14-17",
        text: "فإذ قد تشارك الأولاد في اللحم والدم اشترك هو أيضاً كذلك فيهما، لكي يبيد بالموت ذاك الذي له سلطان الموت، أي إبليس... من ثم كان ينبغي أن يشبه إخوته في كل شيء، لكي يكون رحيماً، ورئيس كهنة أميناً في ما لله حتى يكفر خطايا الشعب",
        category: "الخلاص"
    },
    ref26: {
        title: "المسيح الوسيط",
        verse: "1 تيموثاوس 2: 5",
        text: "لأنه يوجد إله واحد ووسيط واحد بين الله والناس: الإنسان يسوع المسيح",
        category: "الخلاص"
    },
    ref27: {
        title: "المسيح يعلن الله",
        verse: "يوحنا 1: 18",
        text: "الله لم يره أحد قط. الابن الوحيد الذي هو في حضن الآب هو خبر",
        category: "الخلاص"
    },
    ref28: {
        title: "الخلاص بالنعمة بالإيمان",
        verse: "أفسس 2: 8-9",
        text: "لأنكم بالنعمة مخلصون، بالإيمان، وذلك ليس منكم. هو عطية الله. ليس من أعمال كيلا يفتخر أحد",
        category: "الخلاص"
    },
    ref29: {
        title: "التبرير بالإيمان",
        verse: "رومية 5: 1",
        text: "فإذ قد تبررنا بالإيمان لنا سلام مع الله بربنا يسوع المسيح",
        category: "الخلاص"
    },
    ref30: {
        title: "التقديس",
        verse: "1 تسالونيكي 4: 3",
        text: "لأن هذه هي إرادة الله: قداستكم",
        category: "الخلاص"
    },
    ref31: {
        title: "التمجيد",
        verse: "رومية 8: 30",
        text: "والذين سبق فعينهم، فهؤلاء دعاهم أيضاً. والذين دعاهم، فهؤلاء بررهم أيضاً. والذين بررهم، فهؤلاء مجدهم أيضاً",
        category: "الخلاص"
    }
};

// ===== Toggle Card Functionality =====
function toggleCard(element) {
    const card = element.closest('.expandable-card');
    card.classList.toggle('active');
}

// ===== Show Reference Modal =====
function showReference(refId) {
    const modal = document.getElementById('referenceModal');
    const modalBody = document.getElementById('modalBody');
    const ref = biblicalReferences[refId];
    
    if (ref) {
        modalBody.innerHTML = `
            <h3>${ref.title}</h3>
            <p><strong style="color: var(--primary-light); font-size: 1.2rem;">${ref.verse}</strong></p>
            <p style="margin-top: 20px; font-size: 1.15rem; line-height: 2.2;">"${ref.text}"</p>
            <p style="margin-top: 20px;"><span class="modal-category">${ref.category}</span></p>
        `;
        modal.classList.add('active');
    }
}

// ===== Close Modal =====
function closeModal() {
    const modal = document.getElementById('referenceModal');
    modal.classList.remove('active');
}

// ===== Populate References List =====
function populateReferences() {
    const referencesList = document.getElementById('references-list');
    
    Object.keys(biblicalReferences).forEach(key => {
        const ref = biblicalReferences[key];
        const card = document.createElement('div');
        card.className = 'reference-card';
        card.setAttribute('data-category', ref.category);
        card.setAttribute('data-title', ref.title.toLowerCase());
        card.setAttribute('data-verse', ref.verse.toLowerCase());
        card.onclick = () => showReference(key);
        
        card.innerHTML = `
            <h4>${ref.verse} - ${ref.title}</h4>
            <p>"${ref.text}"</p>
            <span class="category">${ref.category}</span>
        `;
        
        referencesList.appendChild(card);
    });
}

// ===== Search References =====
function searchReferences() {
    const searchInput = document.getElementById('searchReferences');
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.reference-card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title');
        const verse = card.getAttribute('data-verse');
        const category = card.getAttribute('data-category').toLowerCase();
        
        if (title.includes(searchTerm) || verse.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== Smooth Scroll to Section =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl+F to focus search
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.getElementById('searchReferences');
        if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', function() {
    // Populate references
    populateReferences();
    
    // Add animation to cards
    const cards = document.querySelectorAll('.card, .attribute-card, .info-box');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Auto-expand first card in each section (optional)
    // document.querySelectorAll('.content-section').forEach(section => {
    //     const firstCard = section.querySelector('.expandable-card');
    //     if (firstCard) {
    //         firstCard.classList.add('active');
    //     }
    // });
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ طباعة';
    printButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        padding: 15px 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        font-family: 'Cairo', sans-serif;
    `;
    
    printButton.onmouseover = function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
    };
    
    printButton.onmouseout = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    };
    
    printButton.onclick = function() {
        // Expand all cards before printing
        document.querySelectorAll('.expandable-card').forEach(card => {
            card.classList.add('active');
        });
        
        setTimeout(() => {
            window.print();
        }, 500);
    };
    
    document.body.appendChild(printButton);
    
    // Add scroll-to-top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '⬆️';
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
    `;
    
    scrollTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.pointerEvents = 'auto';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.pointerEvents = 'none';
        }
    });
    
    console.log('✅ المستند جاهز للاستخدام!');
    console.log('📚 عدد الشواهد الكتابية:', Object.keys(biblicalReferences).length);
});

// ===== Print Styles =====
const style = document.createElement('style');
style.textContent = `
    @media print {
        .navbar, .hero, .footer, button {
            display: none !important;
        }
        
        .expandable-card .card-content {
            max-height: none !important;
            padding: var(--spacing-md) !important;
        }
        
        .card {
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        body {
            background: white;
            color: black;
        }
        
        .expand-icon {
            display: none;
        }
    }
`;
document.head.appendChild(style);
