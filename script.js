/* --- DATA STORE --- */
const projectData = {
    'fatigue': {
        title: "Physics-Informed Fatigue AI",
        desc: "Standard AI models often violate laws of physics. This project modifies the complete training process to ensure that the Neural Network respects physical properties of aircraft components such as the S-N Curve (stress vs cycles) and Miner's Rule. This ensures the model is physically consistent even with sparse training data.",
        tech: "Stack: PyTorch, Tensorflow, Custom Training Loop and Loss Functions, Flight Data Processing."
    },
    'ehs-llm': {
        title: "EHS LLM",
        desc: "Environment, Health, and Safety incidents reported are hard to parse and analyze especially with different locations around the world reporting incidents in different languages. This project was an LLM based pipeline to parse, analyze and report in detail location specific stats and provide recommendations to reduce injury rates.",
        tech: "Stack: Power BI, Python, Pandas, Llama_CPP, Open LLM prompt engineering, OpenAI API."
    },
    'injury': {
        title: "AI Injury Forecaster",
        desc: "Developed a predictive model that analyzes historical shift data, weather conditions, and worker fatigue reports to predict weekly and monthly predictions to specific injury types and focus areas.",
        tech: "Stack: Power BI, Tensorflow, LLama_CPP, Open LLMs, Scikit-Learn, Time-Series Analysis (RNN, Prophet, Arima)."
    },
    'anomaly': {
        title: "Flight Test Anomaly Detector",
        desc: "During flight tests, sensors or systems can fail and may be hazardous to test engineers in close proximity. This project was an Autoencoder Neural Network that learns 'normal' flight patterns. If abnormality spikes, it flags an anomaly in real-time, triggering an auto-shutdown of the test rig to prevent damage.",
        tech: "Stack: Pandas, Plotly, Grafana, TensorFlow, Autoencoders, Real-time Signal Processing."
    },
    'drums': {
        title: "Project: Space Drums",
        desc: "Latest ongoing personal project. A pair of wireless drum sticks that contain Microcontrollers and IMU sensors (MPU 6500 9-axis) for motion tracking and hit detection in the air. Uses Neural Nets for motion tracking accuracy and virtual drum detection. Cost 1/10th of a professional drum kit, good for beginners to try out before purchasing a full drum kit.",
        tech: "Stack: Pytorch, Arduino C programming, Numpy, Data processing."
    },
    'lamp': {
        title: "Project: Gus 2.0",
        desc: "A cute desk robot equipped with various environmental sensors like humidity, temperature, CO2, toxic gas detector, touch sensor, etc. To monitor surrounding conditions in real time. It changes its emotions based on how good or bad the workspace is. For example, if there's excess CO2, it gets drowsy so you need to open the windows to let fresh air inside.",
        tech: "Stack: ESP32s3, Arduino programming, Sensor Data processing, Emotion Animation design"
    },
    'scifi': {
        title: "Sci-Fi Author",
        desc: "I write hard science fiction stories exploring time, space and futuristic technology. My short stories 'Resonance' and 'The Realmwalker' were published on 'Kitaab India' Magazine. My ongoing work is a short story on the implications of creating a 'Theory of Everything'.",
        tech: "Status: Published / Drafting New Story."
    },
    'art': {
        title: "Ink and Watercolor Art",
        desc: "Engineering is precise; Art is chaotic. I paint to explore the other side of my brain. My style focuses on abstract watercolor and/or ink sketches, sometimes from real life references. My latest work 'Frozen Intelligence' captures the internal beauty of a Neural Network to prove they are not 'black boxes' like many people claim.",
        tech: "Medium: Watercolor, Ink, Acrylics."
    }
};


// --- MODAL FUNCTIONS (INSTANT LOAD) ---
function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // 1. Set Title
    document.getElementById('modal-title').innerText = data.title;
    
    // 2. Set Description (INSTANTLY - NO TYPEWRITER)
    document.getElementById('modal-desc').innerText = data.desc;

    // 3. Set Tech Details (INSTANTLY)
    document.getElementById('modal-extra').innerText = "/// SYSTEM_DATA: " + data.tech;

    // 4. Show Modal
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Close modal on clicking outside the box (Overlay click)
document.getElementById('modal-overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Footer Date Update
const dateElement = document.getElementById('last-updated');
const now = new Date();
// ISO 8601 Technical Format
dateElement.innerText = `LAST UPDATED: ${now.toISOString().split('T')[0]}`;

/* --- CONSOLE EASTER EGG (FOR RECRUITERS) --- */
console.log(
  "%c/// SYSTEM_ACCESS: GRANTED ///", 
  "color: #e67e22; font-size: 24px; font-weight: bold; background: #2c3e50; padding: 10px 20px; border-left: 5px solid #e67e22;"
);

console.log(
  "%cHELLO ENGINEER.\nIf you are reading this, you dig deeper than most. I like that.", 
  "font-size: 14px; color: #065fb8ff; font-family: monospace; line-height: 1.5;"
);

console.log(
  "%cHere is the raw JSON of my project data if you want to scrape it:", 
  "font-size: 12px; color: #b1b406ff; margin-top: 10px;"
);

// We log the actual project data object so they can inspect it
// Using 'setTimeout' ensures 'projectData' is defined before logging if this script is at the top
setTimeout(() => {
    console.log(projectData);
    console.log(
        "%cFind my work interesting? Let's get in touch: arpanmondal2308@gmail.com", 
        "color: #2980b9; font-weight: bold; margin-top: 10px;"
    );
}, 1000);
