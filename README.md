# 🧠 Sensory Scape

> Sensory Stimulation Vest for Autistic Children

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)
![Award](https://img.shields.io/badge/award-3rd%20Place%20IEEE%20TSYP-orange)

<p align="center">
  <img src="/api/placeholder/800/400" alt="Sensory Scape Vest" />
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
- 🔒 **Secure & Modular Design** for scalability and adaptability
- 📱 **Mobile Companion App** for caregivers (coming soon)

## 🎯 Why Sensory Scape?

Sensory processing differences affect up to 90% of autistic individuals. Our solution provides:

- **Personalized Therapy**: Each child has unique sensory needs that change over time
- **Dynamic Control**: Therapists can adjust parameters in real-time during sessions
- **Progress Tracking**: Data collection to monitor effectiveness and adaptations
- **Comfort-First Design**: Lightweight, non-restrictive, and sensory-friendly materials
- **Empowerment**: Gives children agency in their sensory regulation journey

## 🛠️ Tech Stack

- **Hardware**:
  - Arduino / ESP32 microcontrollers
  - Vibration motors, pressure pads, temperature modules
  - Custom PCB design for reliable connections
  - Rechargeable battery system

- **Communication**:
  - WebSockets over Wi-Fi
  - Bluetooth Low Energy fallback
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
  <img src="/api/placeholder/800/450" alt="Sensory Scape Dashboard" />
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
├── dashboard/           # React-based frontend
│   ├── src/             # React components
│   ├── public/          # Static assets
│   └── package.json     # Dependencies
├── backend/             # Node.js WebSocket server
│   ├── server.js        # Main server file
│   ├── controllers/     # Business logic
│   └── models/          # Data models
├── firmware/            # Arduino/ESP32 code for the vest
│   ├── main/            # Main firmware
│   └── libraries/       # Custom libraries
├── hardware/            # PCB designs & schematics
├── docs/                # Documentation & diagrams
└── README.md            # You are here
```

## 🔄 Development Roadmap

- [x] Prototype development and testing
- [x] Initial dashboard implementation
- [x] Basic sensory feedback modules
- [x] IEEE TSYP Congress 12 presentation
- [ ] Enhanced data analytics platform
- [ ] Mobile companion app development
- [ ] Machine learning for pattern recognition
- [ ] Clinical trials and validation
- [ ] Open-source hardware release

## 📸 Demo & Media

<p align="center">
  <img src="/api/placeholder/400/225" alt="Demo at TSYP" />
</p>

- 🎥 [Watch our TSYP Congress 12 demo](https://youtu.be/your-video-link)
- 📰 [Read about our journey](https://medium.com/your-article-link)

## 👥 Meet the Team

<table>
  <tr>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>Iheb Ben Taieb</b><br>Project Lead</td>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>Iheb Bettaib</b><br>Hardware Engineer</td>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>Chater Marzougui</b><br>Software Developer</td>
  </tr>
  <tr>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>Arslene Hedhli</b><br>UX Designer</td>
    <td align="center"><img src="/api/placeholder/100/100" /><br><b>Louhichi Mariem</b><br>Research Specialist</td>
    <td align="center"></td>
  </tr>
</table>

## 🤝 Contributing

We welcome contributions to Sensory Scape! Please check out our [contributing guidelines](CONTRIBUTING.md) to get started.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Thanks to the IEEE Tunisia Section & TSYP Congress 12 organizers
- Inspired by the needs of neurodiverse children and their families
- Special thanks to our mentors and testers for their invaluable feedback
- Gratitude to the open-source communities whose libraries made this possible

## 📬 Contact

<p align="center">
  <a href="mailto:your.email@domain.com"><img src="https://img.shields.io/badge/Email-your.email%40domain.com-blue?style=for-the-badge&logo=microsoft-outlook"></a>
  <a href="https://linkedin.com/in/yourusername"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin"></a>
  <a href="https://twitter.com/yourusername"><img src="https://img.shields.io/badge/Twitter-Follow-blue?style=for-the-badge&logo=twitter"></a>
</p>

---

<p align="center">Made with ❤️ for neurodiverse children and their families</p>
