package com.protobin.project.utils;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public abstract class ListUtils {

    public static List<String> removeDuplicatesIgnoreCase(List<String> list) {
        Set<String> lowerCaseSet = new LinkedHashSet<>();
        List<String> result = new ArrayList<>();

        for (String s : list) {
            String lower = s.toLowerCase();
            if (!lowerCaseSet.contains(lower)) {
                lowerCaseSet.add(lower);
                result.add(s);
            }
        }
        return result;
    }
}
