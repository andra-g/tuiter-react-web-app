const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
                <div class="row">
                    <div class="g-0 col-2">
                        <img class="wd-prof-photo mt-2 ml-5" src="../../images/${who.avatarIcon}">
                    </div>
                    <div class="g-0 col-7">
                        <h7><b>${who.userName} </b>
                            <i class="fas fa-check-circle"></i></h7><br>
                        <h7 class="wd-small"> @${who.handle}</h7><br>
                    </div>
                    <div class="g-0 col-2">
                        <button type="button" class="btn wd-btn-lower wd-rounded btn-primary">Follow</button>
                    </div>
                </div>
            </li>
        `);
};
export default WhoToFollowListItem;