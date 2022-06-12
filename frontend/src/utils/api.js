export const fetchPlayers = async (
    maxPlayers = 1,
    setPlayers = () => {},
    setErrors = () => {}
) => {
    try {
        // @NOTE: URL is hardcoded :(
        const response = await fetch(`https://kimmaravilla.com/tyrell-systems/exam/backend/public/?max_players=${maxPlayers}`);
        const data = await response.json();
        setPlayers(data.data);
    } catch (errors) {
        setErrors(errors);
    }
}