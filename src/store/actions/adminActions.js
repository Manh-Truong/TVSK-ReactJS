import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService, 
        getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService
    } from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch(e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e);
        }
    }
}

export const fetchGenderSuccess =(genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})

export const fetchPositionSuccess =(positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})

export const fetchRoleSuccess =(roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})



export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch(e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed error' ,e);
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch(e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed error' ,e);
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("T???o ng?????i d??ng m???i th??nh c??ng!")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                dispatch(saveUserFailed());
            }
        } catch(e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error' ,e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users))
            } else {
                toast.error("L???i t??m t???t c??? ng?????i d??ng!");
                dispatch(fetchAllUsersFailed());
            }
        } catch(e) {
            toast.error("L???i t??m t???t c??? ng?????i d??ng!");
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed error' ,e);
        }
    }
}

export const fetchAllUsersSuccess = (users) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: users
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("X??a ng?????i d??ng th??nh c??ng!")
                dispatch(deteleUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("X??a ng?????i d??ng th??nh c??ng!");
                dispatch(deteleUserFailed());
            }
        } catch(e) {
            toast.error("X??a ng?????i d??ng th??nh c??ng!");
            dispatch(deteleUserFailed());
            console.log('saveFailed error' ,e);
        }
    }
}

export const deteleUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deteleUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("S???a ng?????i d??ng th??nh c??ng!")
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("S???a ng?????i d??ng b??? l???i!");
                dispatch(editUserFailed());
            }
        } catch(e) {
            toast.error("S???a ng?????i d??ng b??? l???i!");
            dispatch(editUserFailed());
            console.log('EditUserFailed error' ,e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS

})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
                })
            }
        } catch(e) {
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            });
        }
    }
}