import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET, POST } from "../../services/methods";

export const getLiveWallpaperCategories = createAsyncThunk(
  "liveWallpapers/getLiveWallpaperCategories",
  async (params) => {
    const getData = async () => {
      return GET("/livewallcategory/all", { params: params }).then((res) => {
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

export const setLiveWallpaperCategory = createAsyncThunk(
  "liveWallpapers/setLiveWallpaperCategory",
  async (payload) => {
    const postData = async () => {
      return POST("/livewallcategory/create", payload).then((res) => {
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

export const updateLiveWallpaperCategory = createAsyncThunk(
  "liveWallpapers/updateLiveWallpaperCategory",
  async ({ id, payload }) => {
    const putData = async () => {
      return POST(`/livewallcategory/create/${id}`, payload).then((res) => {
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

export const deleteLiveWallpaperCategory = createAsyncThunk(
  "liveWallpapers/deleteLiveWallpaperCategory",
  async (id) => {
    const deleteData = async () => {
      return POST(`/livewallcategory/delete/${id}`).then((res) => {
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
      return [];
    }
  }
);

export const rearrangeLiveWallpaperCategory = createAsyncThunk(
  "liveWallpapers/rearrangeLiveWallpaperCategory",
  async (payload) => {
    const postData = async () => {
      return POST(`/livewallcategory/arrange`, payload).then((res) => {
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

export const getLiveWallpapers = createAsyncThunk(
  "liveWallpapers/getLiveWallpapers",
  async (params) => {
    const getData = async () => {
      return GET("/livewallpaper/admin/all", { params: params }).then((res) => {
        console.log(res, "response from getWallpapers");
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await getData();
    } catch {
      return [];
    }
  }
);

export const addLiveWallpaper = createAsyncThunk(
  "liveWallpapers/addLiveWallpaper",
  async (payload) => {
    const postData = async () => {
      return POST("/livewallpaper/create", payload).then((res) => {
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
export const editLiveWallpaper = createAsyncThunk(
  "liveWallpapers/editLiveWallpaper",
  async ({ id, payload }) => {
    const postData = async (id) => {
      return POST(`/livewallpaper/create/${id}`, payload).then((res) => {
        if (res.success) {
          return res.data;
        } else {
          return [];
        }
      });
    };
    try {
      return await postData(id);
    } catch (error) {
      return [];
    }
  }
);

export const deleteLiveWallpaper = createAsyncThunk(
  "liveWallpapers/deleteLiveWallpaper",
  async (payload) => {
    const deleteData = async () => {
      return POST(`/livewallpaper/delete`, payload).then((res) => {
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
      return [];
    }
  }
);

export const publishLiveWallpaper = createAsyncThunk(
  "liveWallpapers/publishLiveWallpaper",
  async (payload) => {
    const postData = async () => {
      return POST(`/admin/livewallpaper/publish`, payload).then((res) => {
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

export const getTopLiveWallpaperSearchTerms = createAsyncThunk(
  "liveWallpapers/getTopLiveWallpaperSearchTerms",
  async (params) => {
    const getData = async () => {
      return GET("/searchterm/liveWallpaper", { params: params }).then(
        (res) => {
          if (res.success) {
            return res.data;
          } else {
            return [];
          }
        }
      );
    };
    try {
      return await getData();
    } catch {
      return [];
    }
  }
);

export const addSearchLiveWallpaperTerm = createAsyncThunk(
  "liveWallpapers/addSearchLiveWallpaperTerm",
  async (payload) => {
    const postData = async () => {
      return POST("/searchterm/create/liveWallpaper", payload).then((res) => {
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

export const deleteSearchLiveWallpaperTerm = createAsyncThunk(
  "liveWallpapers/deleteSearchLiveWallpaperTerm",
  async (id) => {
    const deleteData = async () => {
      return POST(`/searchterm/delete/${id}`).then((res) => {
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
      return [];
    }
  }
);

export const liveWallpaperSlice = createSlice({
  name: "liveWallpaper",
  initialState: {
    liveWallpapersTab: {
      loading: false,
      liveWallpapers: [],
      error: "",
    },
    topLiveWallpaperSearchTab: {
      loading: false,
      topLiveWallpaperSearch: [],
      error: "",
    },
    categoriesTab: {
      loading: false,
      categories: [],
      error: "",
    },
    addLiveWallpapers: {
      loading: false,
    },
  },
  reducers: {
    resetLiveWallpapers: (state) => {
      state.liveWallpapersTab.liveWallpapers = [];
    },
    resetLiveWallpaperCategory: (state) => {
      state.categoriesTab.categories = [];
    },
  },
  extraReducers: {
    [getLiveWallpaperCategories.pending]: (state) => {
      state.categoriesTab.loading = true;
    },
    [getLiveWallpaperCategories.fulfilled]: (state, actions) => {
      state.categoriesTab.loading = false;
      state.categoriesTab.categories = actions.payload;
    },
    [getLiveWallpaperCategories.rejected]: (state) => {
      state.categoriesTab.loading = false;
      state.categoriesTab.error = "Network Error !!!";
    },
    [getLiveWallpapers.pending]: (state) => {
      state.liveWallpapersTab.loading = true;
    },
    [getLiveWallpapers.fulfilled]: (state, actions) => {
      state.liveWallpapersTab.loading = false;
      state.liveWallpapersTab.liveWallpapers = actions.payload;
    },
    [getLiveWallpapers.rejected]: (state) => {
      state.liveWallpapersTab.loading = false;
      state.liveWallpapersTab.error = "Network Error !!!";
    },
    [getTopLiveWallpaperSearchTerms.pending]: (state) => {
      state.topLiveWallpaperSearchTab.loading = true;
    },
    [getTopLiveWallpaperSearchTerms.fulfilled]: (state, actions) => {
      state.topLiveWallpaperSearchTab.loading = false;
      state.topLiveWallpaperSearchTab.topLiveWallpaperSearch = actions.payload;
    },
    [getTopLiveWallpaperSearchTerms.rejected]: (state) => {
      state.topLiveWallpaperSearchTab.loading = false;
      state.topLiveWallpaperSearchTab.error = "Network Error !!!";
    },
    [addLiveWallpaper.pending]: (state) => {
      state.addLiveWallpapers.loading = true;
    },
    [addLiveWallpaper.fulfilled]: (state) => {
      state.addLiveWallpapers.loading = false;
    },
    [addLiveWallpaper.rejected]: (state) => {
      state.addLiveWallpapers.loading = false;
    },
  },
});

export const { resetLiveWallpaperCategory, resetLiveWallpapers } =
  liveWallpaperSlice.actions;
export default liveWallpaperSlice.reducer;
