import React from "react";
// https://strengthlevel.com/strength-standards/ strength index's

export const data = {
  dead: [
    {  60: "Beginner",  84: "Novice", 114: "Intermediate", 149: "Advanced", 186: "Elite" },
    {  67: "Beginner",  92: "Novice", 124: "Intermediate", 160: "Advanced", 198: "Elite" },
    {  73: "Beginner", 100: "Novice", 133: "Intermediate", 170: "Advanced", 210: "Elite" },
    {  80: "Beginner", 108: "Novice", 142: "Intermediate", 180: "Advanced", 221: "Elite" },
    {  86: "Beginner", 115: "Novice", 150: "Intermediate", 190: "Advanced", 232: "Elite" },
    {  93: "Beginner", 123: "Novice", 159: "Intermediate", 199: "Advanced", 242: "Elite" },
    {  99: "Beginner", 130: "Novice", 167: "Intermediate", 208: "Advanced", 252: "Elite" },
    { 105: "Beginner", 136: "Novice", 174: "Intermediate", 217: "Advanced", 261: "Elite" },
    { 111: "Beginner", 143: "Novice", 182: "Intermediate", 225: "Advanced", 270: "Elite" },
    { 116: "Beginner", 150: "Novice", 189: "Intermediate", 223: "Advanced", 279: "Elite" },
    { 122: "Beginner", 156: "Novice", 196: "Intermediate", 241: "Advanced", 288: "Elite" },
    { 127: "Beginner", 162: "Novice", 203: "Intermediate", 248: "Advanced", 296: "Elite" },
    { 133: "Beginner", 168: "Novice", 210: "Intermediate", 256: "Advanced", 304: "Elite" },
    { 138: "Beginner", 174: "Novice", 216: "Intermediate", 263: "Advanced", 312: "Elite" },
    { 143: "Beginner", 180: "Novice", 223: "Intermediate", 270: "Advanced", 320: "Elite" },
    { 148: "Beginner", 185: "Novice", 229: "Intermediate", 277: "Advanced", 327: "Elite" },
    { 153: "Beginner", 191: "Novice", 235: "Intermediate", 284: "Advanced", 334: "Elite" }
  ],
  bench: [
    {  35: "Beginner",  51: "Novice",  72: "Intermediate",  96: "Advanced", 122: "Elite" },
    {  39: "Beginner",  57: "Novice",  79: "Intermediate", 104: "Advanced", 131: "Elite" },
    {  44: "Beginner",  63: "Novice",  85: "Intermediate", 112: "Advanced", 140: "Elite" },
    {  49: "Beginner",  68: "Novice",  92: "Intermediate", 119: "Advanced", 148: "Elite" },
    {  53: "Beginner",  74: "Novice",  98: "Intermediate", 126: "Advanced", 156: "Elite" },
    {  58: "Beginner",  79: "Novice", 104: "Intermediate", 133: "Advanced", 164: "Elite" },
    {  62: "Beginner",  84: "Novice", 110: "Intermediate", 140: "Advanced", 171: "Elite" },
    {  67: "Beginner",  89: "Novice", 116: "Intermediate", 146: "Advanced", 178: "Elite" },
    {  71: "Beginner",  94: "Novice", 121: "Intermediate", 152: "Advanced", 185: "Elite" },
    {  75: "Beginner",  99: "Novice", 127: "Intermediate", 158: "Advanced", 192: "Elite" },
    {  79: "Beginner", 103: "Novice", 132: "Intermediate", 164: "Advanced", 198: "Elite" },
    {  83: "Beginner", 108: "Novice", 137: "Intermediate", 170: "Advanced", 205: "Elite" },
    {  87: "Beginner", 112: "Novice", 142: "Intermediate", 176: "Advanced", 211: "Elite" },
    {  91: "Beginner", 117: "Novice", 147: "Intermediate", 181: "Advanced", 217: "Elite" },
    {  95: "Beginner", 121: "Novice", 152: "Intermediate", 186: "Advanced", 223: "Elite" },
    {  98: "Beginner", 125: "Novice", 157: "Intermediate", 192: "Advanced", 228: "Elite" },
    { 102: "Beginner", 129: "Novice", 161: "Intermediate", 197: "Advanced", 234: "Elite" }
  ],
  squat: [
    {  46: "Beginner",  68:	"Novice",  95: "Intermediate", 126: "Advanced", 160: "Elite" },
    {  53: "Beginner",  76:	"Novice", 104: "Intermediate", 136: "Advanced",	172: "Elite" },
    {  59: "Beginner",  83:	"Novice", 112: "Intermediate", 146: "Advanced",	183: "Elite" },
    {  65: "Beginner",  90:	"Novice", 121: "Intermediate", 156: "Advanced",	193: "Elite" },
    {  71: "Beginner",  97:	"Novice", 129: "Intermediate", 165: "Advanced",	204: "Elite" },
    {  77: "Beginner", 104: "Novice", 137: "Intermediate", 174: "Advanced",	213: "Elite" },
    {  83: "Beginner", 111: "Novice", 144: "Intermediate", 182: "Advanced",	223: "Elite" },
    {  88: "Beginner", 117: "Novice", 152: "Intermediate", 191: "Advanced",	232: "Elite" },
    {  94: "Beginner", 123: "Novice", 159: "Intermediate", 199: "Advanced",	241: "Elite" },
    {  99: "Beginner", 129: "Novice", 166: "Intermediate", 206: "Advanced",	249: "Elite" },
    { 104: "Beginner", 135: "Novice", 172: "Intermediate", 214: "Advanced", 258: "Elite" },
    { 109: "Beginner", 141: "Novice", 179: "Intermediate", 221: "Advanced",	266: "Elite" },
    { 114: "Beginner", 147: "Novice", 185: "Intermediate", 228: "Advanced",	273: "Elite" },
    { 119: "Beginner", 153: "Novice", 192: "Intermediate", 235: "Advanced",	281: "Elite" },
    { 124: "Beginner", 158: "Novice", 198: "Intermediate", 242: "Advanced",	288: "Elite" },
    { 129: "Beginner", 163: "Novice", 204: "Intermediate", 249: "Advanced",	296: "Elite" },
    { 134: "Beginner", 169: "Novice", 210: "Intermediate", 255: "Advanced",	303: "Elite" }
  ],
  ohp: [
    { 21: "Beginner",	33: "Novice",  48: "Intermediate",  66: "Advanced",  85: "Elite" },
    { 24: "Beginner",	37: "Novice",  52: "Intermediate",  71: "Advanced",  91: "Elite" },
    { 27: "Beginner",	40: "Novice",  57: "Intermediate",  76: "Advanced",  97: "Elite" },
    { 30: "Beginner",	44: "Novice",  61: "Intermediate",  81: "Advanced", 102: "Elite" },
    { 33: "Beginner",	48: "Novice",  65: "Intermediate",  85: "Advanced", 107: "Elite" },
    { 36: "Beginner",	51: "Novice",  69: "Intermediate",  90: "Advanced", 113: "Elite" },
    { 39: "Beginner",	54: "Novice",  73: "Intermediate",  94: "Advanced", 117: "Elite" },
    { 42: "Beginner",	57: "Novice",  77: "Intermediate",  99: "Advanced", 122: "Elite" },
    { 44: "Beginner",	61: "Novice",  80: "Intermediate", 103: "Advanced", 127: "Elite" },
    { 47: "Beginner",	64: "Novice",  84: "Intermediate", 107: "Advanced", 131: "Elite" },
    { 50: "Beginner",	67: "Novice",  87: "Intermediate", 111: "Advanced", 135: "Elite" },
    { 52: "Beginner",	70: "Novice",  91: "Intermediate", 114: "Advanced", 140: "Elite" },
    { 55: "Beginner",	72: "Novice",  94: "Intermediate", 118: "Advanced", 144: "Elite" },
    { 57: "Beginner",	75: "Novice",  97: "Intermediate", 122: "Advanced", 148: "Elite" },
    { 59: "Beginner",	78: "Novice", 100: "Intermediate", 125: "Advanced", 151: "Elite" },
    { 62: "Beginner",	81: "Novice", 103: "Intermediate", 128: "Advanced", 155: "Elite" },
    { 64: "Beginner",	83: "Novice", 106: "Intermediate", 132: "Advanced", 159: "Elite" }
  ]

};

export const maxes = {
  dead: [],
  bench: [],
  squat: [],
  ohp: []

};
