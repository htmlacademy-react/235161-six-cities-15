import { createSlice } from '@reduxjs/toolkit';
import { fetchOffers, fetchOfferById, fetchComments, fetchNearbyOffers, postReview } from '../api-actions';
import { NameSpace } from '../../const';
import { OfferType, FullOfferType, ReviewItemType } from '../../types/offer';

type OffersSliceType = {
  cards: {
    cardsData: OfferType[];
    cardsLoadingStatus: boolean;
    cardsErrorStatus: boolean;
  };
  currentOfferData: {
    data: FullOfferType | null;
    nearbyOffers: OfferType[];
    comments: {
      commentsData: ReviewItemType[];
      loadingStatus: boolean;
      commentLoadErrorStatus:boolean;
      postLoadingStatus: boolean;
      commentPostErrorStatus: boolean;
    };
    offerLoadingStatus: boolean;
    offerErrorStatus: boolean;
  };

}

const initialState: OffersSliceType = {
  cards: {
    cardsData: [],
    cardsLoadingStatus: false,
    cardsErrorStatus: false,
  },
  currentOfferData: {
    data: null,
    nearbyOffers: [],
    comments: {
      commentsData: [],
      loadingStatus: false,
      commentLoadErrorStatus: false,
      postLoadingStatus: false,
      commentPostErrorStatus: false,
    },
    offerLoadingStatus: false,
    offerErrorStatus: false,
  },
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.cards.cardsErrorStatus = false;
        state.cards.cardsLoadingStatus = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.cards.cardsData = action.payload;
        state.cards.cardsLoadingStatus = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.cards.cardsLoadingStatus = false;
        state.cards.cardsErrorStatus = true;
      })

      .addCase(fetchOfferById.pending, (state) => {
        state.currentOfferData.offerErrorStatus = false;
        state.currentOfferData.offerLoadingStatus = true;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.currentOfferData.data = action.payload;
        state.currentOfferData.offerLoadingStatus = false;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.currentOfferData.offerLoadingStatus = false;
        state.currentOfferData.offerErrorStatus = true;
      })

      .addCase(fetchComments.pending, (state) => {
        state.currentOfferData.comments.commentLoadErrorStatus = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.currentOfferData.comments.commentsData = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.currentOfferData.comments.commentLoadErrorStatus = true;
      })

      .addCase(postReview.pending, (state) => {
        state.currentOfferData.comments.postLoadingStatus = true;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.currentOfferData.comments.postLoadingStatus = false;
        state.currentOfferData.comments.commentPostErrorStatus = false;
        state.currentOfferData.comments.commentsData.push(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.currentOfferData.comments.postLoadingStatus = false;
        state.currentOfferData.comments.commentPostErrorStatus = true;
      })

      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.currentOfferData.nearbyOffers = action.payload;
      });
  }
});

export const offersReducer = offersSlice.reducer;
