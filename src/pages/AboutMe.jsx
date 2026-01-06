import myPicture from "../assets/myPic.png"
import '../styles/AboutMe.css';

function AboutMe() {
    return (
        <>
            <h3>about:me</h3>
            <div className='side-to-side'>
                <img src={myPicture} alt="Me" className="myPic"/>
                <p className="halfp">
                    Hello, I'm Matheus, a Software Developer who loves creating new things and seeing them come to life.
                    <br />
                    <br />
                    I was born and raised in São Paulo, Brazil. At 16, I moved to the U.S. on my own with the goal of studying abroad. After graduating from high school, I earned a scholarship to Colorado Mesa University as a student-athlete for soccer, where I completed both my academic and athletic journey and graduated with a Bachelor’s degree in Computer Science.
                    <br />
                    <br />
                    I believe programming is a field where there's always room to grow and always something new to learn. I see that as a strength. I'm constantly learning and open to new challenges. What truly drives me is seeing people use something I've built and knowing it's helpful to them.
                    <br />
                    <br />
                    When I'm not coding, I enjoy stepping away from my desk. I like staying active through sports, watching movies, and spending time with friends. I also believe getting outside and enjoying some sunlight is important for the mind, body, and spirit.
                    <br />
                    <br />
                    I'm currently seeking an entry-level or junior position in the industry. Let's connect!</p>
            </div>
            <hr />
            <div className="interests">
                <ul>
                    <li><span>Age:</span>23</li>
                    <li><span>Made in:</span>Brazil</li>
                    <li><span>Degree:</span>Bachelor's of Computer Science</li>
                    <li><span>College:</span>Colorado Mesa University</li>
                    <li><span>Interests</span>Music, soccer, good food and new places</li>
                    <li><span>Languages:</span>Portuguese, English, Spanish</li>
                    <li><span>Goal:</span>To enjoy the process</li>
                    <li><span>Location:</span>Kissimmee, FL. Willing to realloacte</li>
                    <li><span>Availability:</span>January 2026</li>
                </ul>
            </div>
        </>
    );
}

export default AboutMe
