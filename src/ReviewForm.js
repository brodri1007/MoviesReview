function ReviewForm () {
    return (

    <form className="review-app">
        <div className="form-row"><label htlmFor="user-name"> User Name</label>
        <input type="text" id="user-name" /> </div>          
        <div className="form-row"><label htlmFor="user-review">Review</label>
        <textarea type="text" id="user-review" rows="4" cols="25"></textarea>  </div>          
        <button className='btn'>Submit</button>
    </form>
    )
}

export default ReviewForm;