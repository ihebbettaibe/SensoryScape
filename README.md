# 🧠 Sensory Scape

> Sensory Stimulation Vest for Autistic Children

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)
![Award](https://img.shields.io/badge/award-3rd%20Place%20IEEE%20TSYP-orange)

<p align="center">
  <img src="![1735416497838](https://github.com/user-attachments/assets/61882b2f-89e4-47e6-afbe-12f458c21e7a)
" alt="Sensory Scape Vest" />
</p>

> 🏆 **3rd Place Winner** – TN2056 Challenge @ IEEE TSYP Congress 12, Tunisia

## 🌟 Overview

**Sensory Scape** is a wearable assistive technology designed to support autistic children through customizable sensory stimulation. Our smart vest connects to a real-time dashboard that allows specialists to adapt the sensory experience based on each child's unique needs and preferences.

The project empowers neurodiverse users with comfort, calm, and control—built by a passionate team of young innovators dedicated to improving quality of life through accessible technology.

## 💡 Key Features

- 👕 **Smart Vest** with embedded haptic and sensory modules
- 🧑‍⚕️ **Specialist Dashboard** for live control and monitoring
- 🔁 **Real-Time Communication** using WebSocket technology
- 🧠 **Customizable Feedback Patterns** (vibration, temperature, pressure, sound, etc.)
- 📊 **Data Analysis** for tracking progress and optimizing therapy


## 🎯 Why Sensory Scape?

Sensory processing differences affect up to 90% of autistic individuals. Our solution provides:

- **Personalized Therapy**: Each child has unique sensory needs that change over time
- **Dynamic Control**: Therapists can adjust parameters in real-time during sessions
- **Progress Tracking**: Data collection to monitor effectiveness and adaptations
- **Comfort-First Design**: Lightweight, non-restrictive, and sensory-friendly materials
- **Empowerment**: Gives children agency in their sensory regulation journey

## 🛠️ Tech Stack

- **Hardware**:
  - Vibration motors, pressure pads, temperature modules
  - Rechargeable battery system

- **Communication**:
  - WebSockets over Wi-Fi
  - Local data storage for offline functionality

- **Software**:
  - **Frontend**: React.js + Tailwind CSS
  - **Backend**: Node.js (Express) WebSocket Server
  - **Data Analytics**: Python + Pandas

## 🔌 Real-Time System Architecture

```
[Dashboard UI] <--WebSocket--> [Node.js Server] <--Serial/Bluetooth--> [Microcontroller (Vest)]
```

- Dashboard sends sensory commands through a WebSocket to the server
- Server forwards commands to the microcontroller via serial or wireless communication
- Vest responds with corresponding physical feedback (e.g., vibration patterns)
- Sensor data flows back to the dashboard for monitoring and analysis

## 📊 Dashboard Preview

<p align="center">
  <img src="![image](https://github.com/user-attachments/assets/03145bb9-8e8c-490b-8d1d-0ade21726925)
" alt="Sensory Scape Dashboard" />
</p>

The intuitive dashboard allows specialists to:
- Select different sensory modules to activate
- Adjust intensity, duration, and patterns
- View real-time biometric feedback
- Save and load profiles for quick session setup
- Generate reports for progress tracking

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sensory-scape.git
cd sensory-scape
```

### 2. Install Dashboard Dependencies

```bash
cd dashboard
npm install
npm start
```

### 3. Run the WebSocket Server

```bash
cd backend
npm install
node server.js
```

### 4. Upload Firmware

Upload the Arduino/ESP32 firmware located in the `/firmware` folder using the Arduino IDE.

### 5. Connect Everything

- Power on the vest
- Connect via serial/Bluetooth/Wi-Fi
- Open the dashboard and start controlling stimuli live!

## 📂 Project Structure

```
sensory-scape/
├── Sensoryscape-main/           # React-based frontend
│   ├── src/             # React components
│   ├── public/          # Static assets
│   └── package.json     # Dependencies
├── Sensoryscape-backend/             # Node.js WebSocket server
│   ├── server.js        # Main server file
│   ├── controllers/     # Business logic
│   └── models/          # Data models
├── ML model/            # machine learning models
│   ├── main/            # Main models
├── docs/                # Documentation & diagrams
└── README.md            # You are here
```

## 🔄 Development Roadmap

- [x] Prototype development and testing
- [x] Initial dashboard implementation
- [x] Basic sensory feedback modules
- [x] Basic ML model for detecting abnormal behavior 
- [x] IEEE TSYP Congress 12 presentation
- [ ] Enhanced data analytics platform
- [ ] Mobile companion app development
- [ ] Machine learning for pattern recognition
- [ ] Clinical trials and validation
- [ ] Open-source hardware release

## 📸 Demo & Media


- 🎥 [Watc our pictures at The TSYP Congress 12 Pitch]([https://youtu.be/your-video-link](https://www.facebook.com/photo/?fbid=948942384053346&set=pcb.948942637386654))


## 👥 Meet the Team

<table>
  <tr>
    <td align="center"><br><b>Iheb Ben Taieb</b><br>Project Lead</td>
    <td align="center"><br><b>Chater Marzougui</b><br>ICT enginner</td>
  </tr>
  <tr>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>nermine ezzine</b><br>ICT enginner</td>
  

  </tr>
</table>


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Thanks to the IEEE Tunisia Section & TSYP Congress 12 organizers
- Inspired by the needs of neurodiverse children and their families
- Gratitude to the open-source communities whose libraries made this possible

## 📬 Contact

<p align="center">
  <a href="iheb.bentaieb@supcom.tn"><img src="https://img.shields.io/badge/Email-your.email%40domain.com-blue?style=for-the-badge&logo=microsoft-outlook"></a>
 
</p>

---

<p align="center">Made with ❤️ for neurodiverse children and their families</p>
