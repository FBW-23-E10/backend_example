
const getUser = (req, res, next) => {
    try {
        const {uid} = req.params;
        if(uid){
            console.log(uid);
        }else{
            const err = new Error('there is no uid');
            err.status = 400;
            throw err;
        }
        res.send('you logged in!')
        
    } catch (error) {
        next(error)
    }
};


module.exports = {getUser}