import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffers } from '../api-actions';
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
      commentPostErrorStatus: boolean;
    };
    offerLoadingStatus: boolean;
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
      commentPostErrorStatus: false,
    },
    offerLoadingStatus: false,
  },
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    // loadOffers: (state, action: PayloadAction<OfferType[]>) => {
    //   state.cards.cardsData = action.payload;
    // },
    loadOfferById: (state, action: PayloadAction<FullOfferType | null>) => {
      state.currentOfferData.data = action.payload;
    },
    loadNearbyOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.currentOfferData.nearbyOffers = action.payload;
    },
    loadComments: (state, action: PayloadAction<ReviewItemType[]>) => {
      state.currentOfferData.comments.commentsData = action.payload;
    },
    addReview: (state, action: PayloadAction<ReviewItemType>) => {
      state.currentOfferData.comments.commentsData.push(action.payload);
    },
    // changeCardsLoadingStatus: (state, action: PayloadAction<boolean>) => {
    //   state.cards.cardsLoadingStatus = action.payload;
    // },
    changeOfferLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.currentOfferData.offerLoadingStatus = action.payload;
    },
    changePostReviewErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.currentOfferData.comments.commentPostErrorStatus = action.payload;
    },
  },
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
        state.cards.cardsLoadingStatus = true;
        state.cards.cardsErrorStatus = true;
      });
  }
});

export const offersReducer = offersSlice.reducer;
