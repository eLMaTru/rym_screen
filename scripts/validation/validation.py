#!/usr/bin/env python3

'''
 Author: Jorge de Los Santos
 Version: 1.0
 Since: 02-21-2019
 Description: This script is in charge to validate some scenarios and prevent to deploy errors to production

'''
import json
import os
import sys

ROOT_PATH = sys.argv[1]


def validateCommit():
    print("Validating commit ...\n")
    lottery_results = ROOT_PATH + "/lottery-results.html"
    old_lottery_results = ROOT_PATH + "/old-lottery-results.html"
    validateFile(lottery_results)
    validateFile(old_lottery_results)


def validateFile(file_path):
    content = ""
    with open(file_path, 'r') as reader:
        value_list = reader.readlines()
        for line in value_list:
            if bool(line) and "../r-m-screen" in line:
                print(
                    f'Invalid line found: Invalid line found in: {file_path}\n'
                    + 'Please be sure not include ../r-m-screen when commiting your code. \nCode: ({line})\n\n')

                print('Validation stage fail.')
                sys.exit(1)


validateCommit()
