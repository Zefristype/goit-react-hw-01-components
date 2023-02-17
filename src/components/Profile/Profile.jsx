import {
  Card,
  Description,
  StatsList,
  Label,
  Quantity,
  StatItem,
  Img,
  Name,
  Tag,
  Location,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{'@' + tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
