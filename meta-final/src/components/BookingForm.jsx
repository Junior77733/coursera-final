export default function BookingForm() {
    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="date-form">Choose a Date</label>
                    <input type="date" id="date-form"/>

                    <label htmlFor="reserve-time">Choose Time</label>
                    <select id="reserve-time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>

                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" min="1" max="10" placeholder="1" id="guests"/>

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}