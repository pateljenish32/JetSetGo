import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Dimensions, FlatList} from 'react-native';
import style from './styles';
import Button from '../button';

export interface Props {
  sortValues?: any | undefined;
  filterValues?: any | undefined;
  onPressFilter?: Function | undefined;
  onPressSort?: Function | undefined;
}

const SortFilers: React.FC<Props> = ({
  sortValues = ['High-Low', 'Low-High'],
  filterValues = [],
  onPressFilter = () => {},
  onPressSort = () => {},
}: Props) => {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <View>
      <View style={style.container}>
        <Button
          title="SORT"
          containerStyle={style.sort}
          onPress={() => {
            setShowSort(!showSort), setShowFilter(false);
          }}
        />
        <Button
          title="FILTER"
          containerStyle={style.filter}
          onPress={() => {
            setShowFilter(!showFilter), setShowSort(false);
          }}
        />
      </View>
      {(showFilter || showSort) && (
        <View
          style={{
            maxHeight: 160,
            alignItems: showFilter ? 'flex-end' : 'flex-start',
          }}>
          <FlatList
            style={style.flatlist}
            data={showFilter ? filterValues : sortValues}
            renderItem={(item): any => (
              <TouchableOpacity
                onPress={() => {
                  showFilter
                    ? onPressFilter(item.item)
                    : onPressSort(item.item),
                    setShowFilter(false),
                    setShowSort(false);
                }}>
                <Text style={style.text}>{item.item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SortFilers;
