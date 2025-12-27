import Navbar from '../components/Navbar';


const About = () => {
    return (
        <div>
            <Navbar />
            <h1><strong>Dalla logica del codice alla realtà dell'interfaccia.</strong></h1>
            <ol>
                <li>
                    <p><strong>Le origini:</strong> Passione nata capendo "il dietro le quinte" di HTML/CSS/Javascript.</p>
                </li>
                <li>
                    <p><strong>Il presente:</strong> Uso di React ed API per rendere tutto dinamico.</p>
                </li>
                <li>
                    <p><strong>Il futuro:</strong> Mindset rivolto a imparare nuove tecnologie per portare valore in un team.</p>
                </li>
            </ol>
        </div>
    )
};

export default About;