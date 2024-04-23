import './footer.css';

function Footer () {
    return (
        <footer className='footer'>
            <button className="footer-btn" onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
                <h2 className="footer-section__title">Back to top</h2>
            </button>
        </footer>
    )
}

export default Footer;