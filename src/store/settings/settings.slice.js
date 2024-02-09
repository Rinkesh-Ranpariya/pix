import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DELETE, GET, POST } from "../../services/methods";

export const getLicenses = createAsyncThunk(
  "settings/getLicenses",
  async () => {
    const getData = async () => {
      return GET("/license/all").then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await getData();
    } catch (error) {
      return [];
    }
  }
);

export const setLicense = createAsyncThunk(
  "settings/setLicense",
  async (payload) => {
    const postData = async () => {
      return POST("/license/create", payload).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await postData();
    } catch (error) {
      return [];
    }
  }
);

export const updateLicense = createAsyncThunk(
  "settings/updateLicense",
  async ({ id, payload }) => {
    const putData = async () => {
      return POST(`/license/create/${id}`, payload).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await putData();
    } catch (error) {
      return [];
    }
  }
);

export const deleteLicense = createAsyncThunk(
  "settings/deleteLicense",
  async (id) => {
    const deleteData = async () => {
      return POST(`/license/delete/${id}`).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await deleteData();
    } catch (error) {
      console.log("error ===", error);
      return [];
    }
  }
);

export const getOtherSettingDetails = createAsyncThunk(
  "settings/otherSettings",
  async () => {
    const getData = async () => {
      return GET("/setting/thumbnail").then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await getData();
    } catch (error) {
      return [];
    }
  }
);

export const updateOtherSettingDetails = createAsyncThunk(
  "settings/updateOtherSettingDetails",
  async (payload) => {
    const postData = async () => {
      return POST("/setting/thumbnail", payload).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await postData();
    } catch (error) {
      return [];
    }
  }
);

export const addNewPage = createAsyncThunk(
  "settings/addNewPage",
  async (payload) => {
    const postData = async () => {
      return POST("/pages/save", payload).then((res) => {
        if (res.success) {
          return res;
        } else {
          return [];
        }
      });
    };
    try {
      return await postData();
    } catch (error) {
      return [];
    }
  }
);
export const deleteHTMLPage = createAsyncThunk(
  "settings/deleteHTMLPage",
  async (params) => {
    const deleteData = async () => {
      return POST("/pages/delete/" + params.id).then((res) => {
        if (res.success) {
          return res;
        } else {
          return [];
        }
      });
    };
    try {
      return await deleteData();
    } catch (error) {
      return [];
    }
  }
);
export const getHTMLPageDetails = createAsyncThunk(
  "settings/getHTMLPageDetails",
  async (payload) => {
    const getData = async () => {
      return GET("/pages/get", payload).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await getData();
    } catch (error) {
      return [];
    }
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    licensesTab: {
      loading: false,
      licenses: [],
      error: "",
    },
    otherSettingsTab: {
      loading: false,
      otherSettings: [],
      error: "",
    },
    pagesTab: {
      loading: false,
      pageContent: [],
      error: "",
    },
    addNewPage: {
      loading: false,
      addNewPageRep: {},
      error: "",
    },
  },
  reducers: {
    resetAddNewPageResp: (state) => {
      state.addNewPage.addNewPageRep = {};
    },
  },
  extraReducers: {
    [getLicenses.pending]: (state) => {
      state.licensesTab.loading = true;
    },
    [getLicenses.fulfilled]: (state, actions) => {
      state.licensesTab.loading = false;
      state.licensesTab.licenses = actions.payload;
    },
    [getLicenses.rejected]: (state) => {
      state.licensesTab.loading = false;
      state.licensesTab.error = "Network Error !!!";
    },
    [getOtherSettingDetails.pending]: (state) => {
      state.otherSettingsTab.loading = true;
    },
    [getOtherSettingDetails.fulfilled]: (state, actions) => {
      state.otherSettingsTab.loading = false;
      state.otherSettingsTab.licenses = actions.payload;
    },
    [getOtherSettingDetails.rejected]: (state) => {
      state.otherSettingsTab.loading = false;
      state.otherSettingsTab.error = "Network Error !!!";
    },
    [getHTMLPageDetails.pending]: (state) => {
      state.pagesTab.loading = true;
    },
    [getHTMLPageDetails.fulfilled]: (state, actions) => {
      state.pagesTab.loading = false;
      state.pagesTab.pageContent = actions.payload;
    },
    [getHTMLPageDetails.rejected]: (state) => {
      state.pagesTab.loading = false;
      state.pagesTab.error = "Network Error !!!";
    },
    [addNewPage.pending]: (state) => {
      state.addNewPage.loading = true;
    },
    [addNewPage.fulfilled]: (state, actions) => {
      state.addNewPage.loading = false;
      state.addNewPage.addNewPageRep = actions.payload;
    },
    [addNewPage.rejected]: (state) => {
      state.addNewPage.loading = false;
      state.addNewPage.error = "Network Error !!!";
    },
  },
});

export const { resetAddNewPageResp } = settingsSlice.actions;

export default settingsSlice.reducer;
