import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";
import "./styles.css";

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  githubUrl: string;
  linkedinUrl: string;
}
const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  width,
  height,
  githubUrl,
  linkedinUrl,
}) => {
  return (
    <div className="profileWrapper">
      <div className="profileImageContainer">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>

      <div className="socialIcons">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  githubUrl: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
};

export default ProfileImage;