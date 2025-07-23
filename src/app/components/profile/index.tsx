import Image from "next/image";
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

      <div className="efeitos"></div>

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