import re

data=[
    {
        "display_html": "<style>:root { --offset-0-6890: calc(min((3 * 3 * 5px), (3 * 3 * 5px))); --offset-1-2263: calc(max((3 * 3 * 5px), (3 * 3 * 5px))); --neg-2-3415: calc(-1 * var(--offset-1-2263)); }</style><span data-type=\"char\" data-calc=\"0x3 * 0x3 * 0x5\" style=\"position:relative;left:var(--offset-0-6890)\">0</span>2<span data-index=\"0\">2</span><span data-index=\"9\" data-calc=\"0x3 * 0x3 * 0x5\" style=\"position:relative;left:var(--neg-2-3415)\">7</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-1467: calc((3 * 5px) * 1); --offset-1-7809: calc(((2 * 3 * 5px) + 1px - 1px)); --offset-2-6302: calc(min((3 * 3 * 5px), (3 * 3 * 5px))); --neg-3-2430: calc(-1 * var(--offset-2-6302)); }</style><span data-index=\"0\" data-calc=\"三 * 五\" style=\"position:relative;left:var(--offset-0-1467)\">2</span><span title=\"position data\" data-calc=\"二 * 三 * 五\" style=\"position:relative;left:var(--offset-1-7809)\">3</span><span data-index=\"6\">6</span><span title=\"position data\" data-calc=\"c * c * e\" style=\"position:relative;left:var(--neg-3-2430)\">8</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-4047: calc((2 * 3 * 5px) + 0px); --offset-1-2933: calc((2 * 3 * 5px) - 0px + 0px); --neg-2-8962: calc(-1 * var(--offset-1-2933)); }</style><span data-index=\"5\" data-calc=\"0b10 * 0b11 * 0b101\" style=\"position:relative;left:var(--offset-0-4047)\">9</span>5<span data-index=\"1\" data-calc=\"0x2 * 0x3 * 0x5\" style=\"position:relative;left:var(--neg-2-8962)\">6</span>4",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-5672: calc(min((3 * 3 * 5px), (3 * 3 * 5px))); --offset-1-9635: calc((3 * 5px) + 0px); --offset-2-6090: calc(max((2 * 3 * 5px), (2 * 3 * 5px))); --neg-3-8187: calc(-1 * var(--offset-2-6090)); --offset-4-7146: calc(max((2 * 3 * 5px), (2 * 3 * 5px))); --neg-5-5924: calc(-1 * var(--offset-4-7146)); }</style><span title=\"position data\" data-calc=\"c * c * e\" style=\"position:relative;left:var(--offset-0-5672)\">8</span><span title=\"position data\" data-calc=\"三 * 五\" style=\"position:relative;left:var(--offset-1-9635)\">5</span><span data-offset=\"11\" data-calc=\"0x2 * 0x3 * 0x5\" style=\"position:relative;left:var(--neg-3-8187)\">3</span><span data-type=\"char\" data-calc=\"b * c * e\" style=\"position:relative;left:var(--neg-5-5924)\">2</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-1298: calc(((3 * 5px) + 1px - 1px)); --offset-1-2359: calc(max((3 * 5px), (3 * 5px))); --offset-2-2135: calc(min((3 * 5px), (3 * 5px))); --offset-3-5999: calc((3 * 3 * 5px) * 1); }</style><span title=\"position data\" data-calc=\"0b11 * 0b101\" style=\"position:relative;left:var(--offset-0-1298)\">2</span><span data-index=\"0\" data-calc=\"0b11 * 0b101\" style=\"position:relative;left:var(--offset-1-2359)\">4</span><span data-pos=\"21\" data-calc=\"0b11 * 0b101\" style=\"position:relative;left:var(--offset-2-2135)\">1</span><span title=\"position data\" data-calc=\"三 * 三 * 五\" style=\"position:relative;right:var(--offset-3-5999)\">6</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-8593: calc(((3 * 3 * 5px) + 1px - 1px)); --offset-1-7255: calc((2 * 3 * 5px) * 1); --neg-2-3349: calc(-1 * var(--offset-1-7255)); --offset-3-1246: calc(((3 * 5px) * 2 / 2)); --neg-4-7700: calc(-1 * var(--offset-3-1246)); }</style><span data-offset=\"28\" data-calc=\"0x3 * 0x3 * 0x5\" style=\"position:relative;left:var(--offset-0-8593)\">6</span>8<span data-pos=\"84\" data-calc=\"二 * 三 * 五\" style=\"position:relative;left:var(--neg-2-3349)\">1</span><span data-index=\"7\" data-calc=\"0x3 * 0x5\" style=\"position:relative;left:var(--neg-4-7700)\">2</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-4253: calc((3 * 5px) + 0px); --offset-1-9212: calc((3 * 5px) - 0px + 0px); --offset-2-6778: calc((2 * 3 * 5px) * 1); --neg-3-7062: calc(-1 * var(--offset-2-6778)); }</style><span data-index=\"3\" data-calc=\"c * e\" style=\"position:relative;left:var(--offset-0-4253)\">8</span><span data-index=\"3\" data-calc=\"0b11 * 0b101\" style=\"position:relative;left:var(--offset-1-9212)\">9</span><span data-pos=\"95\" data-calc=\"b * c * e\" style=\"position:relative;left:var(--neg-3-7062)\">3</span>0",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-8035: calc((3 * 5px) * 1); --offset-1-5600: calc(min((3 * 5px), (3 * 5px))); --neg-2-1849: calc(-1 * var(--offset-1-5600)); }</style><span data-offset=\"-23\" data-calc=\"0b11 * 0b101\" style=\"position:relative;left:var(--offset-0-8035)\">7</span><span title=\"position data\" data-calc=\"c * e\" style=\"position:relative;left:var(--neg-2-1849)\">1</span>48",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-8447: calc(((2 * 3 * 5px) + 1px - 1px)); --offset-1-6773: calc((2 * 3 * 5px) * 1); --offset-2-1759: calc((2 * 3 * 5px) * 1); --offset-3-7838: calc((2 * 3 * 5px) / 1 * 1); --neg-4-4049: calc(-1 * var(--offset-3-7838)); }</style><span data-offset=\"34\" data-calc=\"0b10 * 0b11 * 0b101\" style=\"position:relative;left:var(--offset-0-8447)\">8</span><span data-index=\"5\" data-calc=\"0b10 * 0b11 * 0b101\" style=\"position:relative;left:var(--offset-1-6773)\">8</span><span data-pos=\"42\" data-calc=\"0x2 * 0x3 * 0x5\" style=\"position:relative;right:var(--offset-2-1759)\">6</span><span data-index=\"5\" data-calc=\"0x2 * 0x3 * 0x5\" style=\"position:relative;left:var(--neg-4-4049)\">4</span>",
        "has_offset": True
    },
    {
        "display_html": "<style>:root { --offset-0-8244: calc(min((2 * 3 * 5px), (2 * 3 * 5px))); --offset-1-7922: calc(((3 * 5px) * 2 / 2)); --offset-2-9559: calc((3 * 5px) * 1); }</style><span data-offset=\"14\" data-calc=\"b * c * e\" style=\"position:relative;left:var(--offset-0-8244)\">9</span><span data-pos=\"11\" data-calc=\"三 * 五\" style=\"position:relative;right:var(--offset-1-7922)\">6</span><span data-type=\"char\" data-calc=\"0b11 * 0b101\" style=\"position:relative;right:var(--offset-2-9559)\">4</span>7",
        "has_offset": True
    }
]

CN_NUM = {"二":2,"三":3,"四":4,"五":5,"六":6,"七":7,"八":8,"九":9,"十":10}

def calc_expr(expr):
    if not expr:
        return 0
    # 替换中文数字
    for k,v in CN_NUM.items():
        expr = expr.replace(k,str(v))
    # 去掉 px
    expr = expr.replace("px","")
    try:
        return eval(expr)
    except:
        return 0

def parse_offsets(style):
    offsets = {}
    for m in re.finditer(r'--(neg-)?([\w-]+):\s*calc\((.*?)\);', style):
        is_neg, key, expr = m.groups()
        val = calc_expr(expr)
        if is_neg:
            val = -val
        offsets[key] = val
    return offsets

def extract_chars(item):
    div = item['display_html']
    style_match = re.search(r'<style>(.*?)</style>', div, re.S)
    style_text = style_match.group(1) if style_match else ''
    offsets = parse_offsets(style_text)

    chars = []
    for m in re.finditer(r'<span[^>]*>(.*?)</span>', div):
        span_html = m.group(0)
        char = m.group(1)
        # 解析 left/right
        left_match = re.search(r'left:var\(--(.*?)\)', span_html)
        right_match = re.search(r'right:var\(--(.*?)\)', span_html)
        pos = 0
        if left_match:
            key = left_match.group(1)
            pos = offsets.get(key,0)
        elif right_match:
            key = right_match.group(1)
            pos = -offsets.get(key,0)
        chars.append((pos,char))
    # 按偏移量排序
    chars.sort(key=lambda x: x[0])
    return ''.join(c for _,c in chars)

# 生成最终结果
result = '-'.join([extract_chars(item) for item in data])
print(result)