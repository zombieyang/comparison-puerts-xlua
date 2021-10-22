using UnityEngine;

public class NumberButton : MonoBehaviour
{
    public enum FrameWork 
    {
        Puerts = 0,
        xLua = 1,
        CSharp = 2,
    }

    public FrameWork UsingFrameWork;

    public int UICount = 0;

    // Start is called before the first frame update
    void Start()
    {
        var childText = transform.Find("Text");
        if (childText != null) 
        {
            UnityEngine.UI.Text text = childText.GetComponent<UnityEngine.UI.Text>();
            text.text = UsingFrameWork + ": " + UICount;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnClick() 
    {
        if (UsingFrameWork == FrameWork.Puerts) {
            GameManager.Instance.RunPuerts(UICount);
        }
        if (UsingFrameWork == FrameWork.CSharp) {
            GameManager.Instance.RunCSharp(UICount);
        }
        if (UsingFrameWork == FrameWork.xLua) {
            GameManager.Instance.RunXLua(UICount);
        }
    }
}
