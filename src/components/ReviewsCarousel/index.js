import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  getLeftReview = () => {
    const {review} = this.state
    console.log(review)

    if (review > 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    }
  }

  getRightReview = () => {
    const {review} = this.state
    console.log(review)

    if (review < 3) {
      this.setState(prevState => ({review: prevState.review + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state

    const profileList = reviewsList[review]

    const {imgUrl, username, companyName, description} = profileList
    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <div className="arrowContainer">
            <button type="button" data-testid="leftArrow" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                data-testid="left Arrow"
                onClick={this.getLeftReview}
              />
            </button>

            <p className="username">{username}</p>

            <button type="button" data-testid="rightArrow" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                data-testid="right Arrow"
                onClick={this.getRightReview}
              />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
