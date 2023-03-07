import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useItems } from '@/hooks/useItems';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { useSalary } from '@/hooks/useSalary';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export { useItems, useActions, useTypedSelector, useTitle, useParams, useSalary, useLocalStorage };
