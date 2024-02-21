import { useState } from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../assets/css/SingleClosetItem'
import { ClosetImg } from '../../assets/images'
// import { useLikeItem, useUnLikeItem } from '../../utils/websiteApi'
import { Link } from 'react-router-dom'
Wrapper
const SingleClosetItem = ({ item }) => {
  const { likeItem } = useLikeItem()
  const { unLikeItem } = useUnLikeItem()
  const [isLike, setIsLike] = useState(false)

  console.log(item.id)
  const handleLikeAndUnlike = () => {
    if (!isLike) {
      likeItem({ id: item.id.toString() })
    } else {
      unLikeItem({ id: item.id.toString() })
    }
    setIsLike(!isLike) // Toggle the follow state
  }
  return (
    <Wrapper>
      <div className='closet-card category'>
        <div className='product-img'>
          <Link to={`/closet/item/${item.id}`}>
            <img src={item.tag_images ? item.tag_image : ClosetImg} alt='' />
          </Link>
        </div>
        <div className='product-desc'>
          <h3>{item.title}</h3>
          <p>NGN {item.price}</p>
          <p className='size'>
            {item.size} | <span className='text-green'> @MaryCloset</span>
          </p>
        </div>
        <div className='socials'>
          <div>
            <CiHeart /> <span>23</span>
          </div>
          <div>
            <AiOutlineLike
              onClick={handleLikeAndUnlike}
              style={{ color: isLike ? 'green' : 'inherit' }}
            />
            <span>21</span>
          </div>
          <div>
            <CiShare2 />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleClosetItem
