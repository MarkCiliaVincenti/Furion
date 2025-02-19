// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using System.Security.Cryptography;
using System.Text;

namespace Furion.DataEncryption;

/// <summary>
/// SHA1 加密
/// </summary>
[SuppressSniffer]
public class SHA1Encryption
{
    /// <summary>
    /// SHA1 加密
    /// </summary>
    /// <param name="text">加密文本</param>
    /// <param name="uppercase">是否输出大写加密，默认 false</param>
    /// <returns></returns>
    public static string Encrypt(string text, bool uppercase = false)
    {
        return Encrypt(Encoding.UTF8.GetBytes(text), uppercase);
    }

    /// <summary>
    /// SHA1 比较
    /// </summary>
    /// <param name="text">加密文本</param>
    /// <param name="hash">SHA1 字符串</param>
    /// <param name="uppercase">是否输出大写加密，默认 false</param>
    /// <returns>bool</returns>
    public static bool Compare(string text, string hash, bool uppercase = false)
    {
        return Compare(Encoding.UTF8.GetBytes(text), hash, uppercase);
    }

    /// <summary>
    /// SHA1 加密
    /// </summary>
    /// <param name="bytes">字节数组</param>
    /// <param name="uppercase">是否输出大写加密，默认 false</param>
    /// <returns></returns>
    public static string Encrypt(byte[] bytes, bool uppercase = false)
    {
        var data = SHA1.HashData(bytes);

        var stringBuilder = new StringBuilder();
        for (var i = 0; i < data.Length; i++)
        {
            stringBuilder.Append(data[i].ToString("x2"));
        }

        var sha1String = stringBuilder.ToString();
        return !uppercase ? sha1String : sha1String.ToUpper();
    }

    /// <summary>
    /// SHA1 比较
    /// </summary>
    /// <param name="bytes">字节数组</param>
    /// <param name="hash">SHA1 字符串</param>
    /// <param name="uppercase">是否输出大写加密，默认 false</param>
    /// <returns>bool</returns>
    public static bool Compare(byte[] bytes, string hash, bool uppercase = false)
    {
        var hashOfInput = Encrypt(bytes, uppercase);
        return hash.Equals(hashOfInput, StringComparison.OrdinalIgnoreCase);
    }
}