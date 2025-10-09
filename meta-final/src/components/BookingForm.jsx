export default function BookingForm({ closeForm }) {
    return (
        <div className="modal-overlay" onClick={closeForm}>
            <form className="reserve-form" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeForm}>&times;</button>
                <h1 className="form-title">Choose Your Reservation</h1>
                <fieldset className="fieldset">
                <div className="entry">
                    <label className="date-form" htmlFor="date-form">Choose a Date</label>
                    <div>
                        <input type="date" id="date-form" />
                    </div>
                </div>
                <div className="entry">
                    <label className="reserve-time" htmlFor="reserve-time">Choose Time</label>
                    <div>
                        <select id="reserve-time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                        </select>
                    </div>
                </div>
                <div className="entry">
                    <label className="guest-form"
                    htmlFor="guests">Number of Guests</label>
                    <div>
                        <input type="number" min="1" max="10" placeholder="1" id="guests" />
                    </div>
                </div>
                <div className="entry">
                    <label className="occasion-form" htmlFor="occasion">Occasion</label>
                    <div>
                        <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                        </select>
                    </div>
                    
                </div>
                </fieldset>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}
