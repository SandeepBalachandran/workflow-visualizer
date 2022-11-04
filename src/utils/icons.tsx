/* eslint-disable react/jsx-key */
import {
  FaTimesCircle,
  FaCaretRight,
  FaCaretLeft,
  FaPrint,
  FaRegFileImage,
  FaSave,
  FaThLarge,
  FaPlus,
  FaFolder,
  FaUserAltSlash,
  FaUserClock,
  FaSmile,
  FaProjectDiagram,
} from 'react-icons/fa';
import { BiExport, BiImport } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { AiFillDelete, AiOutlineGithub } from 'react-icons/ai';
import {
  BsExclamationCircleFill,
  BsInfoCircleFill,
  BsFillExclamationTriangleFill,
  BsCheckCircleFill,
} from 'react-icons/bs';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatColorText,
  MdFormatColorFill,
  MdHighlightAlt,
} from 'react-icons/md';

const icons = new Map([
  ['close', <FaTimesCircle />],
  ['rightarrow', <FaCaretRight />],
  ['leftarrow', <FaCaretLeft />],
  ['print', <FaPrint />],
  ['image', <FaRegFileImage />],
  ['save', <FaSave />],
  ['folder', <FaFolder />],
  ['templates', <FaThLarge />],
  ['plus', <FaPlus />],
  ['export', <BiExport />],
  ['import', <BiImport />],
  ['settings', <FiSettings />],
  ['noregistration', <FaUserAltSlash />],
  ['fast', <FaUserClock />],
  ['happy', <FaSmile />],
  ['delete', <AiFillDelete />],
  ['github', <AiOutlineGithub />],
  ['success', <BsCheckCircleFill />],
  ['error', <BsExclamationCircleFill />],
  ['info', <BsInfoCircleFill />],
  ['warning', <BsFillExclamationTriangleFill />],
  ['diagram', <FaProjectDiagram />],

  ['bold', <MdFormatBold />],
  ['italic', <MdFormatItalic />],
  ['alignleft', <MdFormatAlignLeft />],
  ['aligncenter', <MdFormatAlignCenter />],
  ['alignright', <MdFormatAlignRight />],
  ['color', <MdFormatColorText />],
  ['backgroundcolor', <MdFormatColorFill />],
  ['border', <MdHighlightAlt />],
]);

export function getIcon(iconName: string) {
  return icons.get(iconName?.toLocaleLowerCase());
}
