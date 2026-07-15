import { useDispatch, useSelector } from 'react-redux';

/**
 * Type-safe hooks for Redux to avoid repetitive typing.
 * Use these throughout the app instead of plain useDispatch/useSelector.
 */
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;