import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-container">
                <p className="site-footer-credit">
                    Built by <span className="site-footer-name">Balaji N R</span>
                </p>
                <p className="site-footer-copy">&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
