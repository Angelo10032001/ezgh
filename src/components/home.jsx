import React, { useState } from "react";
import facilityImage from "../assets/facility.jpeg"; 
import outdoorImage from "../assets/outdoor.jpeg"; 
import logo from "../assets/logo.png";
import Login from "./login";


function Home() {
  const [openCategory, setOpenCategory] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const doctorCategories = [
    {
      name: "Family/Internal Medicine",
      doctors: [
        "Edgar L. Zarate, MD, MHA, LLB - General Practitioner",
        "Christina Martinez, MD - Internal Medicine",
        "Ralph Edward V. Gascon, MD - General Practitioner",
        "Liewellyn Nathaniel Chua, MD - General Physician",
        "Juan Paolo Barrios, MD - General Physician",
      ],
    },
    {
      name: "General Otolaryngology",
      doctors: ["Guinere S. Pabayos, MD - ENT-Otolaryngology"],
    },
    {
      name: "General Radiology",
      doctors: ["Mario Carlo De VERA, MD, FPPS - Radiologist / Sonologist"],
    },
    {
      name: "General Pediatric",
      doctors: [
        "Sheila S. Trovela-Marcelino, MD - Pediatrician",
        "Mari Marvin Bolabola-Ching, MD, FDPS - Pediatrician",
        "Joana Marie Meneses, MD - Pediatrician",
      ],
    },
    {
      name: "Obstetric and Gynecology",
      doctors: [
        "Joan Sy Zarate, MD, FPOGS - OB Gynecologist",
        "Charlene Robello L. Ramos, MD - OB Gynecologist",
        "Chuchi Sentones-Dalisay, MD - OB Gynecologist",
      ],
    },
    {
      name: "Surgery and Anesthesia",
      doctors: [
        "Siegfried James T. Tap, MD - General Surgeon",
        "Jillian Georgina T. Tap, MD - General Surgeon",
        "Allen Anthony Sese, MD - General Surgeon",
        "Ray Francis Indiongco, MD - General Surgeon",
        "Ralph Dennies A. Vincente, MD - Orthopedic Surgeon",
        "Christian M. Del Mundo, MD - Anesthesiology",
        "Partrick Fidel B. Timtiman, MD - Orthopedic and Spine Surgeon",
        "Erwin Rommel M. Halili, MD - Urology",
      ],
    },
  ];

  // Split the categories into two equal groups
  const midIndex = Math.ceil(doctorCategories.length / 2);
  const leftCategories = doctorCategories.slice(0, midIndex);
  const rightCategories = doctorCategories.slice(midIndex);


  return (
    <div className="min-h-screen bg-white flex flex-col items-center">

      
      <nav className="fixed top-0 left-0 w-full bg-[#41bbc5] shadow-md py-4 flex justify-center gap-8 z-50">
      <div className="relative right-[390px] flex items-center space-x-3">
          <img src={logo} alt="Hospital Logo" className="w-12 h-12 rounded-full" />
        </div>
        {["Home", "About Us", "Appointment", "Contact Us"].map((section) => (
          <a 
            key={section}
            href={`#${section.toLowerCase().replace(" ", "-")}`}
            className="relative top-2 text-2xl font-semibold text-gray-800 hover:text-teal-500 transition duration-300"
          >
            {section}
          </a>
        ))}
   
        <button
          onClick={() => setShowLogin(true)}
          className="relative left-[370px] top-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
        >
          Login
        </button>
      </nav>
    
      {/* Home Section */}
      <section id="home" className="w-full min-h-screen flex flex-col justify-center bg-white py-20 px-6">
        <h1 className="relative text-8xl font-bold text-black left-16" style={{ fontFamily: "serif" }}>
          E. ZARATE <br />
          GENERAL <br />
          HOSPITAL
        </h1>

        <h2 
          className="relative text-5xl text-black mt-10 left-28 bottom-[30px]" 
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          "We Treat, God Heals"
        </h2>

        <div className="absolute right-12 top-32 w-[45%]">
          <div className="relative">
            {/* Main Clipped Image */}
            <img
              src={outdoorImage}
              alt="Hospital"
              className="relative top-0 left-12 w-screen h-[550px] rounded-lg shadow-lg clip-parallelogram"
            />
            
            {/* Smaller Overlapping Image */}
            <img
              src={facilityImage}
              alt="Interior"
              className="absolute top-36 left-[-70px] w-[350px] h-[220px] rounded-lg border-4 border-white shadow-xl clip-parallelogram"
            />
          </div>
         
        </div>
        {[
          "top-20 left-20",
          "top-20 right-12",
          "bottom-16 left-36",
          "bottom-24 right-10",
          "top-16 left-16 text-5xl",
          "top-16 right-24",
          "bottom-5 left-28",
          "bottom-20 right-24",
        ].map((pos, index) => (
          <span key={index} className={`absolute text-7xl text-teal-400 font-bold ${pos}`}>+</span>
        ))}
      </section>

   
      {/* About Us Section */}
<section id="about-us" className="w-full min-h-screen flex flex-col items-center bg-white py-16 px-6">
<br></br><br></br>
  <h2 className="text-6xl font-bold text-[#41bbc5] text-center mb-12">About Us</h2>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl">
    {/* Left Column - Vision and Mission */}
    <div className="flex-1 text-center md:text-left space-y-8">
      <div>
        <h3 className="text-3xl font-bold text-[#41bbc5]">History</h3>
        <p className="text-lg text-gray-700 mt-2">
        The conceptual realization of an independent, stand-alone Urgent Care 
        or Emergency Clinic in Las Piñas City (probably the first of its kind) 
        started in 1987 with the institutionalization of Zarate Emergency Clinic 
        (ZEC). It was May 1994 when Zarate Medical and Diagnostic Clinic (ZMDC) 
        sprung forth as one of the leading primary health care facilities of the city.
        </p>

        <p className="text-lg text-gray-700 mt-2">
        The success of ZEC continued to surpass earlier expectations and so ZMDC was born.
         Here, the same concept of an integrated urgent-care approach, holistic medicine and
          individualized-management slowly but surely, widened the circle of patient network 
          to neighboring and even distant towns and provinces of the country.
        </p>

        <p className="text-lg text-gray-700 mt-2">
        Purpose as a nearby Emergency Clinic, a ‘front-liner’ in the field of Emergency Medicine and Trauma, 
        especially among the middle and lower socio–economic class members of society. No case was neither 
        too trivial nor too serious, from minor lacerations to gunshot and stab wounds, minor medical cases 
        to cases such as hypertensive crisis, heart attack or stroke. Cases requiring facilities of a higher 
        - level hospital were immediately transported to affiliated tertiary hospitals, either private or 
        government by an always available fully-equipped ambulance/ medical transport system.
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#41bbc5]">Mission</h3>
        <p className="text-lg text-gray-700 mt-2">
        To treat the sick with the highest level of professional competence and compassion:
         To eliminate or mitigate pain and suffering: To acord andect the basic right of each 
         human being to life and the maintenance of health, irrespective of age, gender, race, 
         nationality, religion and creed: To live and work under the biblical precept that - 
         it is God that Heals, we are mere implements of his mighty healing hand.
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#41bbc5]">Vision</h3>
        <p className="text-lg text-gray-700 mt-2">
          To face and overcome the challenges posed by constant changes and innovation in medical diagnostics 
          and management in the midst of challenges brought by rapid global technological advancement. 
          To continue serving patients with utmost and optimum care through relentless perseverance, 
          unwavering dedication, and faith in God, the giver and provider of all.
        </p>
      </div>
    </div>

    {/* Right Column - Images */}
    <div className="relative flex-1 flex justify-center">
      <div className="relative left-[100px] w-full max-w-full">
        {/* Large Circular Image */}
        <img 
          src={outdoorImage} 
          alt="Hospital Facility" 
          className="w-[1000px] h-[450px] border-4 border-white shadow-lg"
        />

        {/* Smaller Overlapping Image */}
        <img 
          src={facilityImage} 
          alt="Hospital Outdoor" 
          className="absolute bottom-[695px] right-0 w-[180px] h-[180px] rounded-full border-4 border-white shadow-lg"
        />
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
        
          {/* Large Circular Image */}
          <img 
          src={facilityImage} 
          alt="Hospital Facility" 
          className="w-[900px] h-[500px] border-4 border-white shadow-lg"
        />

        {/* Smaller Overlapping Image */}
        <img 
          src={outdoorImage} 
          alt="Hospital Outdoor" 
          className="absolute bottom-0 right-0 w-[180px] h-[180px] rounded-full border-4 border-white shadow-lg"
        />
      </div>
    </div>
  </div> <br></br><br></br>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column - Patients' Rights */}
    <div>
      <h3 className="absolute left-[500px] text-2xl font-bold text-[#41bbc5] flex items-center">
        <span className="text-4xl text-green-500 mr-2">+</span> PATIENT'S RIGHTS AND RESPONSIBILITIES
      </h3><br></br><br></br>
      <h3 className="absolute left-[500px] text-2xl font-bold text-[#41bbc5] flex items-center">
         (KARAPATAN AT TUNGKULIN NG MGA PASYENTE)
      </h3><br></br><br></br>

        <p className="mt-4 space-y-4 text-lg text-gray-700">
        <span className="font-bold">At E. Zarate Hospital, we put you on top of our responsibilities because you are co-responsible in your journey to health. As our health partner, we would like you to be aware of our Rights and Responsibilities.</span>
      (Sa E. Zarate Hospital, kayo ang aming prayoridad sapagkat ikaw ay kabisig namin sa iyong paglalakbay tungo sa iyong kalusugan, bilang aming partner, nais naming maunawaan ninyo ang inyong mga karapatan at tungkulin.)
      <br></br><br></br>
       <span className="font-bold"> As a patient of E. Zarate Hospital, you have the right, consistent with Philippine Laws: </span>
      (Bilang pasyente ng E. Zarate Hospital, ikaw ay may karapatan, naaayon sa batas ng Pilipinas na)
      <br></br><br></br>
      <span className="font-bold">Right to be informed of</span>  (Malaman)
      <br></br><br></br>
     <span className="font-bold"> A. Rights as a patient in a manner and language that you understand. </span> (Karapatan bilang pasyente sa wika na iyong naiintindihan.) <br></br><br></br>
     <span className="font-bold"> B. The names and departments of Doctors and staff who will be involved in your care in the hospital.</span> (Ang mga pangalan at departamento ng mga manggagamot at kawani na magkakalinga habang ikaw ay nasa ospital.)<br></br><br></br>
     <span className="font-bold"> C. The nature of your illness, its likely cause, manifestation, and course.</span> (Ang uri, sanhi, at kakahinatnan ng iyong karamdaman.)<br></br><br></br>
      <span className="font-bold">D. Treatments proposed to you, their benefits, side effects, potential risks, and costs.</span> (Ang lahat ng mga pamamaraang gagamitin sa paglunas ng karamdaman mo, ang mga benepisyo, posibleng komplikasyon, at kaukulang kabayaran nito.) <br></br><br></br>
      <span className="font-bold"> E. Other treatment options relevant to your condition, including the option to withhold treatment, and the consequences of taking such options. </span> (Ang iba pang mga alternatibong pamamaraan ng paglunas sa karamdaman mo, kasama ang hindi pagpapagamot at ang magiging resulta nito.)<br></br><br></br>

      <span className="font-bold">2.To receive medical care that is </span> (Makatanggap ng pangangalagang medikal na)
      <br></br><br></br>
      <span className="font-bold"> A. Free from discrimination as to ethnic origin, religion, gender, disability, sexual orientation, and socio-economic status. </span> (Walang pinipiling lahi, relihiyon, kasarian, kapansanan, oryentasyong sekswal, o antas ng pamumuhay sa lipunan.)<br></br><br></br>
      <span className="font-bold"> B. Delivered with respect, consideration, and compassion in a clean and safe environment free of unnecessary restraint. </span> (May paggalang, pang-unawa, at ibinibigay sa isang malinis, malaya, at ligtas na kapaligiran.)<br></br><br></br>
      <span className="font-bold"> C. Appropriate to your medical condition and consistent with the terms of your informed consent, your decisions, preferences, and values. </span> (Naaayon sa iyong pangangailangang pangkalusugan at kaalinsabay ng iyong pahintulot, desisyon, at pagpapahalaga.)<br></br><br></br>
      <span className="font-bold"> D. Given in a timely manner whenever you need it. </span> (Maagap sa iyong pangangailangan.) <br></br><br></br>

      <span className="font-bold">3.To be advised of, participate in, or refuse to take part in any medical research, receive full information on the purposes and procedures of the research, and be assured that your refusal will not compromise your care.</span> (Mapagpayuhan, makibahagi, at tumangging makibahagi sa pananaliksik at mabigyan ng kasiguraduhan na ang iyong pagtanggi ay hindi makakaapekto sa iyong kalusugan.)
      <br></br><br></br>
      <span className="font-bold">4.To refuse any treatment or procedures and be informed of the effects and consequences of refusal.</span>
      (Tumanggi sa anumang gamutan o proseso at malaman ang mga epekto o kahihinatnan ng ginawang pagtanggi.)
      <br></br><br></br>
      <span className="font-bold">5.To privacy while in the hospital and confidentiality of all information and records regarding your care. </span> (Mapangalagaan ang iyong privacy at confidentiality ng mga impormasyon at talaan tungkol sa iyong kalusugan.)
        </p>

    </div>

    {/* Right Column - Patients' Responsibilities */}
    <div>
    <br></br><br></br><br></br><br></br>
      <p className="mt-4 space-y-4 text-lg text-gray-700">
      <span className="font-bold">6.To participate in all decisions about your treatment and discharge from the hospital.</span>
      (Makikibahagi sa lahat ng pagdedesisyon tungkol sa iyong pagpapagamot at paglabas sa ospital.)
      <br></br><br></br>
      <span className="font-bold">7. To complain without fear of reprisals about the care and services you are receiving and to have the Hospital respond to you. </span> (walang takot na mailahad ang mga reklamo ukol sa iyong tinatanggap na pangangalaga at serbisyo at mabigyan ng karapatang tugon ng ospital)
      <br></br><br></br>
      <span className="font-bold">8. To authorize those family members and other adults who will be given priority to visit consistent with your ability to receive visitors and pertinent hospital policies. </span> (mapahintulutan ang pamilya at iba pang tao na bumisita sa iyo nang ayon sa iyong kakayahang tumanggap ng bisita at sa patakaran ng ospital) 
      <br></br><br></br>
      <span className="font-bold">At the same time, as a patient of E. Zarate Hospital, you have the following responsibilities:</span> (at gayundin naman, bilang isang pasyente ng E. Zarate Hospital, ikaw ay may mga tungkulin na)
      <br></br><br></br>
      <span className="font-bold">1. To provide complete and truthful information about yourself, health, including past illnesses, hospital stays, surgeries, allergies, and use of medicines/other forms of treatment. </span> (Magbigay ng buo at totoong impormasyon hinggil sa iyong sarili, kalusugan, kasama na ang mga dati at kasalukuyang ginagamit, mga pamamalagi sa ospital at iba pang uri ng pagpapagamot, mga operasyon at mga allergies) 
      <br></br><br></br>
      <span className="font-bold">2. To know the members of your health care team.</span> (Kilalanin ang mga doktor, nars at iba pang kawani ng ospital na nangangalaga sa iyong kalusugan) 
      <br></br><br></br>
      <span className="font-bold">3. To be involved in the decisions regarding your health care.</span> (Makibahagi sa pagpapasya ukol sa iyong kalusugan) 
      <br></br><br></br>
      <span className="font-bold">4. To ask questions regarding the nature of your illness and its management including options, likely outcomes, benefits, risks, and costs.</span> (Magtanong ukol sa tunay na kalagayan ng iyong karamdaman, mga posibleng lunas, komplikasyon, benepisyo at kabayaran)
      <br></br><br></br>
      <span className="font-bold">5. To ask questions whenever you are not sure of the information or instructions given to you. </span> (Magtanong kailanman hindi malinaw sa iyo ang mga impormasyon o mga dapat gawing itinuturo sa iyo)
      <br></br><br></br>
      <span className="font-bold">6. To tell the healthcare team if you have problems adhering to the plan of care as agreed upon.</span> (Sabihin sa mga tagapangalaga kung sakaling may problema ka sa pagsunod sa napagkasunduang plano ng gamutan ng iyong karamdaman) 
      <br></br><br></br>
      <span className="font-bold">7. To follow hospital rules and regulations affecting patient care, safety, and conduct.</span> (Sundin ang mga alituntunin ng ospital tungkol sa pangangalaga, seguridad, at kilos ng mga pasyente)
      <br></br><br></br>
      <span className="font-bold">8. To be considerate of the rights of other patients, staff, and hospital including those pertaining to noise control, cleanliness, smoking, and visitors.</span> (Isaalang-alang at igalang ang mga karapatan ng ibang pasyente, at mga kawani ng ospital kasama ang mga panuntunang tungkol sa ingay, kalinisan, paninigarilyo at pagtanggap ng panauhin) 
      <br></br><br></br>
      <span className="font-bold">9.  To promptly pay the bills related to your care according to the hospital policies.</span> (Maagap na bayaran ang lahat ng hospital bills ayon sa mga patakaran ng ospital)
      <br></br><br></br>
      <span className="font-bold">10. To recognize the effect of lifestyle on your personal health, and in doing so, making responsible decisions in your daily life.</span> (Pagtimbangin ang iyong nakaugalian at mga desisyon sa iyong pamumuhay na may malaking epekto sa iyong kalusugan, bukod pa sa pangangalaga ng ospital sa iyo)
      </p>
    </div>
  </div>
</section>


      {/* Appointment Section */}
      <section id="appointment" className="w-full min-h-screen flex flex-col items-center bg-white py-16">
      <h2 className="text-6xl font-bold text-gray-800 relative top-[30px]">Appointment</h2>
  

      <div className="relative top-[70px] mt-6 w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Column */}
        <div>
          {leftCategories.map((category, index) => (
            <div key={index} className="mb-6">
              {/* Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-2xl font-semibold bg-teal-500 text-white px-4 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                {category.name}
              </button>

              {/* Doctor List (Collapsible) */}
              {openCategory === category.name && (
                <ul className="mt-2 bg-gray-100 rounded-lg shadow-lg p-4">
                  {category.doctors.map((doctor, idx) => (
                    <li key={idx} className="text-lg text-gray-700 border-b py-2 last:border-none">
                      {doctor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightCategories.map((category, index) => (
            <div key={index} className="mb-6">
              {/* Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-2xl font-semibold bg-teal-500 text-white px-4 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                {category.name}
              </button>

              {/* Doctor List (Collapsible) */}
              {openCategory === category.name && (
                <ul className="mt-2 bg-gray-100 rounded-lg shadow-lg p-4">
                  {category.doctors.map((doctor, idx) => (
                    <li key={idx} className="text-lg text-gray-700 border-b py-2 last:border-none">
                      {doctor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
        <h2 className="text-6xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
          Need assistance? Reach out to us via phone, email, or visit our hospital for 
          in-person support.
        </p>
        <div className="mt-6 text-gray-700 text-lg">
          <p>📞 Phone: (123) 456-7890</p>
          <p>📧 Email: info@zaratehospital.com</p>
          <p>📍 Address: 123 Medical Ave, City, Country</p>
        </div>
      </section>

      {/* Custom CSS for Clipped Image */}
      <style>
        {`
          .clip-parallelogram {
            clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
        {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
}


export default Home;
